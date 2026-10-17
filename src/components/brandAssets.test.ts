import { describe, expect, it } from 'vitest';
import { logoImageUrl } from './brandAssets';

describe('brand assets', () => {
  it('uses the bundled logo image asset', () => {
    expect(logoImageUrl).toMatch(/logo\.png$/);
  });
});
