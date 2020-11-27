import { fizzBuzz } from './for.fizz-buzz'

describe('fizzBuzz', () => {
  it('should return a list whose length is the same as the initial number', () => {
    const given = 2

    const actual = fizzBuzz(given)

    expect(actual).toHaveLength(2)
  })

  it('should replace fizz whenever there is a number that is divisible by 3', () => {
    const given = 3

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should replace buzz whenever there is a number that is divisible by 5', () => {
    const given = 5

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace with fizzbuzz whenever there is a number that is divisible by 3 and by 5', () => {
    const given = 15

    const actual = fizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
