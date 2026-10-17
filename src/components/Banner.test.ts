import { describe, expect, it } from 'vitest';
import { bannerImageUrl } from './bannerAssets';

describe('Banner assets', () => {
  it('uses the bundled banner image asset', () => {
    expect(bannerImageUrl).toMatch(/banner-stack\.png$/);
  });
});
