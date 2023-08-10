import { addAllNumbers } from './addAllNumbers'
describe('add all numbers', () => {
  it('should be 1', () => {
    const result = addAllNumbers([1])

    expect(result).toBe(1)
  })

  it('should be 2', () => {
    const result = addAllNumbers([1, 1])

    expect(result).toBe(2)
  })
})
