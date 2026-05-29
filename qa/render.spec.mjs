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
    await page.getByRole('tab', { name: 'Competition' }).click();
    await expect(page.getByRole('heading', { name: /proving the workflow/i })).toBeVisible();
    await expect(page.locator('.head-to-head-panel')).toContainText('Head-to-head');
    await expect(page.locator('.proof-sprint-panel h2')).toHaveText('72-hour proof sprint');
    await expect(page.locator('.roi-panel')).toContainText('ROI and time saved');
    await expect(page.locator('.objections-panel')).toContainText('Judge objections');
    await expect(page.getByText('36 founder hours saved')).toBeVisible();
    await expect(page.getByText('Is this just a wrapper?')).toBeVisible();
  } catch (error) {
    console.log(JSON.stringify(browserEvents, null, 2));
    console.log((await page.content()).slice(0, 1600));
    throw error;
  }
  await page.screenshot({ path: 'out/desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 900 });
  await page.screenshot({ path: 'out/mobile-competition.png', fullPage: true });
  expect(browserEvents.filter((event) => event.startsWith('error:'))).toEqual([]);
});
