import { test, expect } from '@playwright/test';

test('Página do Google abre e tem título correto', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
