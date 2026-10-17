import { describe, expect, it } from 'vitest';
import { addTechnology, clearStack, getStackCountLabel, removeTechnology } from './stack';

describe('stack state helpers', () => {
  it('adds a technology that is not already selected', () => {
    expect(addTechnology(['react'], 'nodejs')).toEqual(['react', 'nodejs']);
  });

  it('does not add a technology twice', () => {
    expect(addTechnology(['react'], 'react')).toEqual(['react']);
  });

  it('removes only the requested technology', () => {
    expect(removeTechnology(['react', 'nodejs'], 'react')).toEqual(['nodejs']);
  });

  it('clears every selected technology', () => {
    expect(clearStack()).toEqual([]);
  });

  it('formats the selected technology count for the stack panel', () => {
    expect(getStackCountLabel(1)).toBe('1 Technology Selected');
    expect(getStackCountLabel(3)).toBe('3 Technologies Selected');
  });
});
