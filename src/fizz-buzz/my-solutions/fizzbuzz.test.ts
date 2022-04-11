import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should be [1]', () => {
    const result = fizzbuzz(1)

    expect(result).toEqual([1])
  })

  it('should be [1,2]', () => {
    const result = fizzbuzz(2)

    expect(result).toEqual([1, 2])
  })

  it("should be [1,2,'fizz']", () => {
    const result = fizzbuzz(3)

    expect(result).toEqual([1, 2, 'fizz'])
  })

  it("should be [1,2,'fizz',4, 'buzz']", () => {
    const result = fizzbuzz(5)
    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it("should be [1,2,'fizz',4, 'buzz', 'fizz']", () => {
    const result = fizzbuzz(6)
    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz'])
  })

  it("should be [1,2,'fizz',4, 'buzz', 'fizz', 7, 8,'fizz','buzz']", () => {
    const result = fizzbuzz(10)
    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])
  })
})
