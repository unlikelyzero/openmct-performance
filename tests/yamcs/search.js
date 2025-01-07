import { browser } from 'k6/browser';
import { check } from 'k6';
import { b64encode } from 'k6/encoding';


// Get the username and password from environment variables
const openmctUsername = __ENV.OPENMCT_USERNAME;
const openmctPassword = __ENV.OPENMCT_PASSWORD;

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {

    // Create a new context with the basic auth credentials
    const contextWithAuth = await browser.newContext({
      httpCredentials: {
        username: openmctUsername,
        password: openmctPassword,
      },
    });
  
  const page = await contextWithAuth.newPage();

  try {

  // Go to http://localhost:8040/#/browse/mine?tc.mode=local&tc.startDelta=1800000&tc.endDelta=0&tc.timeSystem=utc&view=grid
  await page.goto('http://localhost:8040/#/browse/mine?tc.mode=local&tc.startDelta=1800000&tc.endDelta=0&tc.timeSystem=utc&view=grid');
  // Click [aria-label="OpenMCT Search"] [aria-label="Search Input"]
  await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').click();
  // Fill [aria-label="OpenMCT Search"] [aria-label="Search Input"]
  await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('numCommands');
  // Click text=numCommands
  await page.locator('text=numCommands').click();
  await page.waitForURL('http://localhost:8040/#/browse/taxonomy:spacecraft/taxonomy:~yamcs/taxonomy:~yamcs~4a7a5ec7b748/taxonomy:~yamcs~4a7a5ec7b748~cmdQueue/taxonomy:~yamcs~4a7a5ec7b748~cmdQueue~default/taxonomy:~yamcs~4a7a5ec7b748~cmdQueue~default~numCommands?tc.mode=local&tc.startDelta=1800000&tc.endDelta=0&tc.timeSystem=utc&view=plot-single');

  
    check(page, {
      'numCommands appears in search result': await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible(),
    });

  } finally {
    await page.close();
  }
}

