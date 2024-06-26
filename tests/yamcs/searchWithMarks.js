//import { chromium } from 'k6/experimental/browser'; //k6 v0.44.1 ((devel), go1.20.4, darwin/amd64)
import { browser } from 'k6/experimental/browser';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { b64encode } from 'k6/encoding';


import http from 'k6/http';

// Get the username and password from environment variables
const openmctUsername = __ENV.OPENMCT_USERNAME;
const openmctPassword = __ENV.OPENMCT_PASSWORD;

function createBasicAuthHeader(username, password) {
  const base64Credentials = b64encode(`${username}:${password}`);

  return `Basic ${base64Credentials}`;
};

const basicAuthHeader = createBasicAuthHeader(openmctUsername, openmctPassword);


export const options = {
  scenarios: {
    'ui': {
      options: {
        browser: {
            type: 'chromium'
        }
      },
      executor: 'constant-vus',
      vus: 1,
      duration: '120s'
    },
    backend: {
      executor: 'ramping-vus',
      exec: 'backend', // Add this line to specify the function to execute
      startVUs: 0,
      stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 20 },
        { duration: '10s', target: 20 },
        { duration: '20s', target: 30 },
        { duration: '60s', target: 10 },
      ],
      gracefulRampDown: '0s',
    },
  }
};

const myTrend = new Trend('browser_custom_totalSearchTime');

// Function to perform benchmarking
async function benchmark(page) {
  // Inject page content
  await page.setContent(`
      <div class="visible">Hello world</div>
      <div style="display:none" class="hidden"></div>
      <div class="editable" editable>Edit me</div>
      <input type="checkbox" enabled class="enabled">
      <input type="checkbox" disabled class="disabled">
      <input type="checkbox" checked class="checked">
      <input type="checkbox" class="unchecked">
  `);

  // Perform click action on a specific checkbox
  await page.locator('.unchecked').click();

  // Check state
  check(page, {
      'bench.visible': p => p.$('.visible').isVisible(),
      'bench.hidden': p => p.$('.hidden').isHidden(),
      'bench.checked': p => p.$('.unchecked').isChecked(),
  });
}


// Function to simulate typing with delay
async function typeWithDelay(page, locator, text, delay) {
  let currentText = '';
  for (const char of text) {
      currentText += char;
      await page.locator(locator).fill(currentText);
      sleep(delay);
  }
  await page.evaluate(() => window.performance.mark('search-entered'));
}

export default async function browserScenario() {
  
  // Create a new context with the basic auth credentials
  const contextWithAuth = await browser.newContext({
    httpCredentials: {
      username: openmctUsername,
      password: openmctPassword,
    },
  });

  const page = contextWithAuth.newPage();

  try {
    // Use the benchmark function
    await benchmark(page);


    await page.goto("http://localhost:8040/", { waitUntil: "networkidle" });

    //Assertion that Grand Search appears
    check(page, {
      'search result appears': await page.locator('[aria-label="OpenMCT Search"] input[type="search"]').isVisible(),
    });

    //Open Grand Search
    await page.locator('[aria-label="OpenMCT Search"] input[type="search"]').click();
    await page.evaluate(() => window.performance.mark('search-available'));

    //Raw fill command
    // await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('numCommands');
    // await page.evaluate(() => window.performance.mark('search-entered'));

    // // typeWithDelay to fill in the search as a human would
    await typeWithDelay(page, '[aria-label="OpenMCT Search"] [aria-label="Search Input"]', 'numCommands', 1);

    // Press Enter
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');

    await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible();
    await page.evaluate(() => window.performance.mark('search-returned'));

    //Assertion that numCommands appears in the result
    check(page, {
      'numCommands appears in search result': await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible(),
    });

    //Get time difference between beginning search and returning search
    await page.evaluate(() =>
      window.performance.measure(
        'total-search-time',
        'search-entered',
        'search-returned'
      )
    );

    const totalSearchTime = await page.evaluate(() =>
      JSON.parse(JSON.stringify(window.performance.getEntriesByName('total-search-time')))[0].duration
    );
    console.log('totalSearchTime = ' + totalSearchTime + 'ms');

    //Assertion that the UX search appears in 80ms 
    check(page, {
      'search returns in under 80ms': totalSearchTime < 80,
    });

    myTrend.add(totalSearchTime);
    searchTrend.add(totalSearchTime);

  } finally {
    page.close();
  }
};

export function backend() {
  // Raw API query for numCommands
  const res1 = http.get('http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numCommands&searchMembers=true&details=false', {
    headers: {
      Authorization: basicAuthHeader
    }
  });

  check(res1, {
    'status is 200': (r) => r.status === 200,
  });

  // Second request to the CouchDB
  const url = "http://localhost:8040/couchdb/openmct/_find";
  const payload = JSON.stringify({
      selector: {
          model: {
              name: {
                  "$regex": "(?i)numcommands"
              }
          }
      }
  });

  const params = {
    headers: {
      "accept": "*/*",
      // Use the basicAuthHeader from earlier, or replace with the specific encoded credentials
      "authorization": basicAuthHeader, 
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "Referer": "http://localhost:8040/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  };

  const res2 = http.post(url, payload, params);

  check(res2, {
    'status is 200': (r) => r.status === 200,
  });
}


