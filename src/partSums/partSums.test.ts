import { partsSums } from './partSums';

describe('partSums', () => {
  it('should handle when the sum is equal to zero', () => {
    expect(partsSums([0, 0])).toEqual([0]);
  });
  it('should be able to handle one operation', () => {
    expect(partsSums([1])).toEqual([1, 0]);
  });

  it('should be able to handle several operations', () => {
    expect(partsSums([1, 2])).toEqual([3, 2, 0]);
  });

  it('should pass the acceptance test', () => {
    expect(partsSums([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0]);
  });
});
