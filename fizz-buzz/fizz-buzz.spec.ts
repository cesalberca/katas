import { fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should replace the 3 by fizz', () => {
    const given = 3

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should replace the 5 by buzz', () => {
    const given = 5

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace all numbers whose modulus is 0 when divided by 3', () => {
    const given = 6

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz'])
  })
})
