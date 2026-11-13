
import { expect, test } from '../fixtures/test.fixture.js';

test('BookCart homepage is accessible', async ({ homePage }) => {
  const response = await homePage.open();

  expect(response).not.toBeNull();
  expect(response?.ok()).toBe(true);
});
