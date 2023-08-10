import { highestNumber } from './highestNumber';

describe('highestNumber', () => {
  it('should be 0 when array is empty', () => {
    const result = highestNumber([]);

    expect(result).toEqual(0);
  });

  it('should be 0', () => {
    const result = highestNumber([0]);

    expect(result).toEqual(0);
  });

  it('shoud be 1', () => {
    const result = highestNumber([0, 1]);

    expect(result).toEqual(1);
  });

  it('should be 3', () => {
    const result = highestNumber([3, 1, 2]);

    expect(result).toBe(3);
  });

  it('should be 99', () => {
    const result = highestNumber([98, 45, 99, 67, 2]);

    expect(result).toBe(99);
  });
});
