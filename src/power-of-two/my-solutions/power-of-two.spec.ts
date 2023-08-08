import { powerOfTwo } from './power-of-two';

describe('power of two', () => {
  it('should multiple it each number by themselves', () => {
    expect(powerOfTwo([])).toEqual([]);
    expect(powerOfTwo([1])).toEqual([1]);
    expect(powerOfTwo([2])).toEqual([4]);
    expect(powerOfTwo([2, 3])).toEqual([4, 9]);
  });
});
