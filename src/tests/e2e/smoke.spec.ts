import { expect, test } from '@playwright/test';

test('health endpoint is reachable', async ({ request }) => {
  const response = await request.get('/api/health');

  expect(response.ok()).toBeTruthy();
});
