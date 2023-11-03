import { chromium } from 'k6/experimental/browser';
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    browser: {
      executor: 'constant-vus',
      exec:'browser',
      vus: 1,
      duration: '1m',
    },
    backend: {
      executor: 'constant-vus',
      exec: 'backend',
      vus: 10,
      duration: '5m',
    },
  },
};


export async function browser() {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  try {

    // Go to http://localhost:9000/
    const response = await page.goto("http://localhost:8040/", { waitUntil: "networkidle" });
    console.log(response.request()); // null

    //Verify that Grand Search appears
    check(page, {
      'search result appears': await page.locator('[aria-label="OpenMCT Search"] input[type="search"]').isVisible(),
    });

    //Open Grand Search
    await page.locator('[aria-label="OpenMCT Search"] input[type="search"]').click();
    await page.evaluate(() => window.performance.mark('search-available'));

    //Search for numCommand
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('numCommands');
    await page.evaluate(() => window.performance.mark('search-entered'));


    // Press Enter
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');

    await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible();
    await page.evaluate(() => window.performance.mark('search-returned'));

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

    check(page, {
      'search returns in under 242ms': totalSearchTime < 242,
    });

  } finally {
    page.close();
    browser.close();
  }
}

export function backend() {
  const res = http.get('http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numCommands&searchMembers=true&details=false');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}

