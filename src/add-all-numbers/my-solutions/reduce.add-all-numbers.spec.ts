import { addAllNumbers } from './reduce.add-all-numbers'

describe('addAllnumbers', () => {
  it('given an array with a number should return the number', () => {
    const given = [1]

    const result = addAllNumbers(given)

    expect(result).toBe(1)
  })

  it('given a list of numbers should return the total of all numbers', () => {
    const given = [1, 2, 3, 4, 5]

    const result = addAllNumbers(given)

    expect(result).toBe(15)
  })
})
