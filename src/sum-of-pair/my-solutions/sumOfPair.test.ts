import { sumPairs } from './sumOfPair';

describe('sum of pairs', () => {
  it('should handle empty list ', () => {
    const result = sumPairs([], 5);
    expect(result).toBe(undefined);
  });

  it('should handle simple case with 2 numbers in the list that match result ', () => {
    const result = sumPairs([2, 3], 5);

    expect(result).toEqual([2, 3]);
  });

  it('should handle with multiple numbers in a list but only one pair', () => {
    const result = sumPairs([11, 3, 7, 5], 10);
    console.log(result);
    expect(result).toEqual([3, 7]);
  });

  it('should handle multiple cases with pair in the begining', () => {
    const result = sumPairs([3, 7, 11, 5], 10);

    expect(result).toEqual([3, 7]);
  });

  it('should be undefined when there is no pair', () => {
    const result = sumPairs([0, 0, -2, 3], 2);

    expect(result).toBe(undefined);
  });

  it('should handle pair that are far from each other', () => {
    const result = sumPairs([4, 3, 2, 3], 6);
    console.log(result);
    expect(result).toEqual([4, 2]);
  });

  it('should give the earliest pair when there is multiple one ', () => {
    const result = sumPairs([10, 5, 2, 3, 7, 5], 10);
    console.log(result);
    expect(result).toEqual([3, 7]);
  });
});
