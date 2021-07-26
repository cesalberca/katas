import { mapFizzBuzz } from './fizz-buzz'

describe('mapFizzBuzz', () => {
  it('should replace the numbers divisible by 3 with Fizz', () => {
    const given = 3

    const actual = mapFizzBuzz(given)

    expect(actual).toEqual([1, 2, 'Fizz'])
  })

  it('Should replace the numbers divisible by 5 with Buzz', () => {
    const given = 5

    const actual = mapFizzBuzz(given)

    expect(actual).toEqual([1, 2, 'Fizz', 4, 'Buzz'])
  })

  it('should replace the numbers divisible by 3 and 5555 with FizzBuzz', () => {
    const given = 15

    const actual = mapFizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz'
    ])
  })
})
