import { addAllNumbers2 } from './add-all-numbers'

describe('addAllNumbers', () => {
  it('given one value, it should return the sum', () => {
    const given = [1]
    const result = addAllNumbers2(given)
    expect(result).toEqual(1)
  })
  it('given two values, it should return the sum', () => {
    const given = [1, 2]
    const result = addAllNumbers2(given)
    expect(result).toEqual(3)
  })
})
