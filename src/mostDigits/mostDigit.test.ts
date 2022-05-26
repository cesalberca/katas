import { Kata } from './mostDigit'

describe('most Digit', () => {
  it('should be the only number in the array', () => {
    expect(Kata.findLongest([1])).toBe(1)
  })

  it('should work with another number', () => {
    expect(Kata.findLongest([2])).toBe(2)
  })

  it('should be the number with most digit when it is the last in the list', () => {
    expect(Kata.findLongest([2, 10])).toBe(10)
  })

  it('should be the first number with most digit', () => {
    expect(Kata.findLongest([10, 11])).toBe(10)
  })

  it('should pass the accpetance test', () => {
    expect(Kata.findLongest([8, 900, 500])).toBe(900)
    expect(Kata.findLongest([1, 10, 100])).toBe(100)
  })
})
