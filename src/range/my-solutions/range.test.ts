import { range } from './range';

describe('range', () => {
  it('should handle one number', () => {
    const result = range(5);

    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should handle two number when the first one is 0 and is bigger than the second', () => {
    const result = range(0, 3);

    expect(result).toEqual([0, 1, 2, 3]);
  });

  it('should handle when the first one is not 0', () => {
    const result = range(2, 5);

    expect(result).toEqual([2, 3, 4, 5]);
  });

  it('should handle when the second number is greater than the first', () => {
    const result = range(6, 2);

    expect(result).toEqual([6, 5, 4, 3, 2]);
  });

  it('should handle when the second number is greater than the first and the first is 0', () => {
    const result = range(6, 0);

    expect(result).toEqual([6, 5, 4, 3, 2, 1, 0]);
  });

  it('should handle 0', () => {
    const result = range(0);
    expect(result).toEqual([0]);
  });

  it('should handle equality between first number and last', () => {
    const result = range(5, 5);

    expect(result).toEqual([5]);
  });
});
