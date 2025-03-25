// @ts-check
import { test, expect } from '@playwright/test';

test('has info', async ({ page }) => {
  await page.goto('http://127.0.0.1:3001/info');

  await expect(page.getByText('has info')).toBeVisible()
});

