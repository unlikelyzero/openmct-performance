import { chromium } from 'k6/experimental/browser';
import { check } from 'k6';

export default async function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  try {
    // Go to http://localhost:9000/
    await page.goto("http://localhost:9000/", { waitUntil: "networkidle" });

    page.locator('[aria-label="OpenMCT Search"] input[type="search"]').click();
    // page.evaluate(() => window.performance.mark("search-available"));

      // Fill [aria-label="OpenMCT Search"] [aria-label="Search Input"]
    page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('tal');

      // Press Enter
    page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');

      // Click [aria-label="OpenMCT Search"] [aria-label="Search Input"]
    page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').click();

      // Press Enter
    page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').press('Enter');

    // check(page, {
    //   searchResult: page.locator('div[role="presentation"]') == 'vda1.total',
    // });
  } finally {
    page.close();
    browser.close();
  }
}

