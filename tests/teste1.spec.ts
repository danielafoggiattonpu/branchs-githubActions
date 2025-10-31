import { test, expect } from '@playwright/test';

test.only('Página inicial abre corretamente', async ({ page }) => {
  await page.goto('https://example.com'); // você pode colocar qualquer URL de teste
  await expect(page).toHaveTitle(/Example Domain/);
});

