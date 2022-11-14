import { fizzBuzz } from './fizz-buzz'

describe('fizz-buzz function', () => {
  it('given a number, return a list that starts on 1 and ends with that number', () => {
    const given = 15
    const result = fizzBuzz(given)
    expect(result).toEqual([
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
