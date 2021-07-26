import { getTotal } from './add-all-numbers'

describe('addAllNumbers', () => {
  it('should get the total by adding them together', () => {
    const given = [1, 2, 3]

    const actual = getTotal(given)

    expect(actual).toBe(6)
  })
})
