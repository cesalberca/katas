import { filterEvenNumbers } from './filterEvenNumbers'

describe('filterEvenNumbers', () => {
  it('should return an array with only even numbers', () => {
    const given = [1, 2, 3]

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([2])
  })
})
