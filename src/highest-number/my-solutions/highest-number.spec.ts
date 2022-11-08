import { getHighestNumberSpread } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]
    const result = getHighestNumberSpread(given)
    expect(result).toBe(42)
  })
  it('should get the highest number given an array of 2 or more numbers', () => {
    const given = [20, 40]
    const result = getHighestNumberSpread(given)
    expect(result).toBe(40)
  })
})
