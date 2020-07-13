import { getHighestNumber } from './highest-number.sort'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })

  it('should get the highest number given an array of several numbers', () => {
    const given = [1, 10, 3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(10)
  })
})
