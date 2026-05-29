import { test, expect } from '@playwright/test';

test('RAISE application workspace renders', async ({ page }) => {
  const port = process.env.PORT || '4178';
  const browserEvents = [];
  page.on('console', (message) => {
    browserEvents.push(`${message.type()}: ${message.text()}`);
  });
  page.on('pageerror', (error) => {
    browserEvents.push(`pageerror: ${error.message}`);
  });

  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  try {
    await expect(page.getByText('RAISE the STAKES 2026').first()).toBeVisible({ timeout: 20000 });
  } catch (error) {
    console.log(JSON.stringify(browserEvents, null, 2));
    console.log((await page.content()).slice(0, 1600));
    throw error;
  }
  await page.screenshot({ path: 'out/desktop.png', fullPage: true });
  expect(browserEvents.filter((event) => event.startsWith('error:'))).toEqual([]);
});
