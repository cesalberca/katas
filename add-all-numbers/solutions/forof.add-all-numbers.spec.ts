import { getTotal } from './forof.add-all-numbers'

describe('forof.addAllNumbers', () => {
  it('should add all numbers', () => {
    const given = [3, 2, 1]

    const actual = getTotal(given)

    expect(actual).toBe(6)
  })

  it('should add different numbers', () => {
    const given = [1, 2, 3, 4]

    const actual = getTotal(given)

    expect(actual).toBe(10)
  })
})
