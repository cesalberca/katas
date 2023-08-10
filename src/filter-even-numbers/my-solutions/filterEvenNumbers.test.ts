import { filterEvenNumbers } from './filterEvenNumbers'

describe('filterEvenNumbers', () => {
  it('should return []', () => {
    const result = filterEvenNumbers([])

    expect(result).toEqual([])
  })

  it('should return [2]', () => {
    const result = filterEvenNumbers([2])

    expect(result).toEqual([2])
  })

  it('should return []', () => {
    const result = filterEvenNumbers([1])

    expect(result).toEqual([])
  })

  it('should return [2]', () => {
    const result = filterEvenNumbers([1, 2, 3])

    expect(result).toEqual([2])
  })

  it('should return [100, 24, 16]', () => {
    const result = filterEvenNumbers([99, 45, 63, 100, 87, 24, 16])

    expect(result).toEqual([100, 24, 16])
  })
})
