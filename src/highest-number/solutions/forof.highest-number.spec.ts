import { getHighestNumber } from './forof.highest-number'

describe('getHighestNumber', () => {
  it('should get the only element in the list if there is only one element', () => {
    const given = [100]

    const actual = getHighestNumber(given)

    expect(actual).toBe(100)
  })

  it('should get the highest numbers amongst several numbers', () => {
    const given = [1, 2, 3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(3)
  })

  it('should get the highest numbers amongst several negative numbers', () => {
    const given = [-1, -2, -3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
