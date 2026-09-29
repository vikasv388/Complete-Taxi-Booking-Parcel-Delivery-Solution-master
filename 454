const { test, expect } = require('@playwright/test');

test('Demo Login Test', async ({ page }) => {
  await page.goto(' https://rentifaidev.coinbitwallet.com/login');

  await page.fill('#username','Test@gmail.com');
  await page.fill('#password', 'Test@12345');

  await page.click('button[type="submit"]');

  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );

  await expect(page).toHaveURL(/secure/);
});
