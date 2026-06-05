import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  testInfo.setTimeout(120000);

  await page.goto('https://automationexercise.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
  await page.locator('#collapse1').getByText('Launch browser').click();
  await page.getByRole('link', { name: ' Products' }).click();
  
  // Explicitly wait for the Signup/Login link to be visible before clicking
  await page.getByRole('link', { name: ' Signup / Login' }).waitFor({ state: 'visible', timeout: 30000 });
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
  await page.getByRole('button', { name: 'Login' }).click();
});