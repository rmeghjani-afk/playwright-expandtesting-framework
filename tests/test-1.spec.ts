import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/#google_vignette');
  await page.getByRole('button', { name: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
  await expect(page.locator('#collapse1').getByText('Launch browser')).toBeVisible();
  await expect(page.locator('#collapse1').getByText('3. Verify that home page is')).toBeVisible();
  await expect(page.locator('#collapse1').getByText('Click on \'Signup / Login\' button')).toBeVisible();
  await expect(page.locator('#collapse1').getByText('Verify \'New User Signup!\' is visible')).toBeVisible();
  await expect(page.getByText('Click \'Create Account button\'')).toBeVisible();
  await expect(page.getByText('16. Verify that \'Logged in as')).toBeVisible();
  await expect(page.getByText('18. Verify that \'ACCOUNT')).toBeVisible();
});