import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [41]

    const actual = getHighestNumber(given)

    expect(actual).toBe(41)
  })

  it('Should get the highest number given an array of several numbers', () => {
    const given = [1, 45, 68]

    const actual = getHighestNumber(given)

    expect(actual).toBe(68)
  })
})
