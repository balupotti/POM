// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/api_list');
  await page.waitForTimeout(5000)
  });