import { describe, expect, it } from 'vitest';
import { isEscapeKey } from './navigation';

describe('navigation helpers', () => {
  it('recognizes the Escape key', () => {
    expect(isEscapeKey('Escape')).toBe(true);
  });

  it('ignores other keys', () => {
    expect(isEscapeKey('Enter')).toBe(false);
  });
});
