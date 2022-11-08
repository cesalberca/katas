import { powerOfTwo2 } from './power-of-two'

describe('powerOfTwo', () => {
  it('should return the power of 2 give an array of one', () => {
    const given = [1]
    const result = powerOfTwo2(given)
    expect(result).toEqual([1])
  })
  it('should return all the power of two of the numbers given an array of 2 or more numbers', () => {
    const given = [1, 2, 3]
    const result = powerOfTwo2(given)
    expect(result).toEqual([1, 4, 9])
  })
})
