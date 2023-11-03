import { chromium } from 'k6/experimental/browser';
import { check } from 'k6';



export default async function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  try {
    const response = await page.goto("http://localhost:8040/", { waitUntil: "networkidle" });

    //Open Grand Search
    await page.locator('[aria-label="OpenMCT Search"] input[type="search"]').click();

    //Search for numCommand
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('numCommands');

    // Press Enter
    await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');

    await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible();

    check(page, {
      'numCommands appears in search result': await page.locator('[aria-label="numCommands yamcs.telemetry result"]').isVisible(),
    });

  } finally {
    page.close();
    browser.close();
  }
}

