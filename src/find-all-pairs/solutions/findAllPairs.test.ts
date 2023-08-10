import { findAllPairs } from './findAllPairs'

describe('findAllPairs', () => {
  it('should be 0 if there is no pairs', () => {
    expect(findAllPairs([])).toBe(0)
  })

  it('should be 1 if there is one pairs', () => {
    expect(findAllPairs([1, 1])).toBe(1)
  })

  it('should be two if there is two pairs', () => {
    expect(findAllPairs([1, 1, 2, 2])).toBe(2)
  })

  it('should be two if there is two pairs with one number that is not a pair', () => {
    expect(findAllPairs([1, 2, 2, 1, 3])).toBe(2)
  })

  it('should be zero when there is no pair but numbers', () => {
    expect(findAllPairs([1, 2, 3, 4, 5])).toBe(0)
  })

  it('should be zero when there is no pair but numbers', () => {
    expect(findAllPairs([1, 1, 1, 2, 2, 2])).toBe(2)
  })

  it('should pass the acceptancen test', () => {
    expect(findAllPairs([1, 2, 2, 20, 6, 20, 2, 6, 2])).toBe(4)
  })
})
