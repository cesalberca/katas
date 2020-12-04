import { getTotal } from './reduce.add-all-numbers'

describe('addAllNumbers', () => {
  it('should add all the numbers', () => {
    const given = [1, 2, 3]

    const actual = getTotal(given)

    expect(actual).toBe(6)
  })
})
