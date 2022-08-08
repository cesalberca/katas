import { getPoweredByTwo } from './map.power-of-two'

describe('getPowerOfTwo', () => {
  it('given an array of a number should return a new array with a number that are power of two', () => {
    const given = [2]
    const poweredByTwo = getPoweredByTwo(given)
    expect(poweredByTwo).toStrictEqual([4])
  })

  it('given an array of numbers should return a new array with numbers powered by two', () => {
    const given = [1, 2, 3]

    const poweredByTwo = getPoweredByTwo(given)

    expect(poweredByTwo).toStrictEqual([1, 4, 9])
  })
})
