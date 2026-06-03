import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/#google_vignette');
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 13: Verify Product' }).click();
  await page.getByRole('link', { name: 'Test Case 19: View & Cart' }).click();
  await page.getByRole('link', { name: ' Video Tutorials' }).click();
  await page.getByRole('link', { name: 'YouTube Home' }).click();
});