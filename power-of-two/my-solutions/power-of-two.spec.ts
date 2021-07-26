import { getPoweredByTwo } from './power-of-two'

describe('getPoweredByTwo', () => {
  it('Should get the power of two for a given number of elements', () => {
    const given = [1, 2, 3]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([1, 4, 9])
  })
})
