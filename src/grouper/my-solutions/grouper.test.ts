import { grouper } from './grouper';

describe('grouper', () => {
  it('should handle when there is not any person', () => {
    const result = grouper([]);
    expect(result).toBe('there is no people');
  });

  it('should handle one person', () => {
    const result = grouper([{ age: 23, name: 'Clement' }]);

    expect(result).toEqual({
      23: ['Clement'],
    });
  });

  it('should handle two persons with same age and same name', () => {
    const result = grouper([
      { age: 23, name: 'Clement' },
      { age: 23, name: 'Clement' },
    ]);

    expect(result).toEqual({
      23: ['Clement'],
    });
  });

  it('should handle different people with different age', () => {
    const result = grouper([
      { age: 23, name: 'Clement' },
      { age: 23, name: 'Hugo' },
      { age: 20, name: 'Ines' },
    ]);

    expect(result).toEqual({
      23: ['Clement', 'Hugo'],
      20: ['Ines'],
    });
  });
});
