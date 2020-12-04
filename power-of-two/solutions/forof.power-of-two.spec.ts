import { getPoweredByTwo } from './forof.power-of-two'

describe('getPoweredByTwo', () => {
  it('should obtain the power of 2 for a given number of elements', () => {
    const given = [1, 2, 3]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([1, 4, 9])
  })
})
