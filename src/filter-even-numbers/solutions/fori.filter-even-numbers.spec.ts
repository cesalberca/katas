import { getEvenNumbers } from './fori.filter-even-numbers'

describe('filterEvenNumbers', () => {
  it('should filter the even numbers', () => {
    const given = [1, 24, 3, 8, 10]

    const actual = getEvenNumbers(given)

    expect(actual).toEqual([24, 8, 10])
  })
})
