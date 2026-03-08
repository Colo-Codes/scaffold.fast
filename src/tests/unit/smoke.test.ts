import { describe, expect, it } from 'vitest';

import { toTitleCase } from '@/utils/strings';

describe('toTitleCase', () => {
  it('capitalizes first character', () => {
    expect(toTitleCase('boilerplate')).toBe('Boilerplate');
  });
});
