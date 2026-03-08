import { describe, expect, it } from 'vitest';

import { GET } from '@/app/api/health/route';

describe('health route', () => {
  it('returns ok payload', async () => {
    const response = GET();
    const payload = (await response.json()) as { ok: boolean };

    expect(payload.ok).toBe(true);
  });
});
