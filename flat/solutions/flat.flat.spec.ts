import { flat } from './flat.flat'

describe('flat', () => {
  it('should return the array as is if it is a single array', () => {
    const given = [1, 2]

    const actual = flat(given)

    expect(actual).toEqual([1, 2])
  })

  it('should stitch two different arrays', () => {
    const given = [
      [1, 2],
      [3, 4]
    ]

    const actual = flat(...given)

    expect(actual).toEqual([1, 2, 3, 4])
  })

  it('should stitch three different arrays', () => {
    const given = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]

    const actual = flat(...given)

    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })
})
