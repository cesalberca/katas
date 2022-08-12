import { flat } from './flat'

describe('flat', () => {
  it('should return a single array if recive a single array', () => {
    const given = [1, 2, 3]

    const actual = flat(given)

    expect(actual).toEqual([1, 2, 3])
  })
  it('should return a single array if recive more than an array', () => {
    const given = [
      [1, 2, 3],
      [4, 5, 6]
    ]

    const actual = flat(given)

    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })
})
