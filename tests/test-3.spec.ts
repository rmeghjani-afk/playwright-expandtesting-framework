import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  testInfo.setTimeout(60000);

  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
  await page.locator('#collapse1').getByText('Launch browser').click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
  await page.getByRole('button', { name: 'Login' }).click();
});