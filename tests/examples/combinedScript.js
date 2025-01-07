import { browser } from 'k6/browser';
import { check } from 'https://jslib.k6.io/k6-utils/1.5.0/index.js';
import http from 'k6/http';

export const options = {
  scenarios: {
    browser: {
      executor: 'constant-vus',
      exec: 'browserTest',
      vus: 1,
      duration: '10s',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
    news: {
      executor: 'constant-vus',
      exec: 'news',
      vus: 20,
      duration: '1m',
    },
  },
};

export async function browserTest() {
  const page = await browser.newPage();

  try {
    await page.goto('https://test.k6.io/browser.php');

    await page.locator('#checkbox1').check();

    await check(page.locator('#checkbox-info-display'), {
      'checkbox is checked': async lo =>
        await lo.textContent() === 'Thanks for checking the box'
    });
  } finally {
    await page.close();
  }
}

export function news() {
  const res = http.get('https://test.k6.io/news.php');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}