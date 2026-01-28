
import { expect, test } from '@playwright/test';

test('BookCart homepage is accessible', async ({ page }) => {
  const response = await page.goto('/');

  expect(response).not.toBeNull();
  expect(response?.ok()).toBe(true);
});
