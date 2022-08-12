import { getPoweredByTwo } from './forof.power-of-two'

describe('getPoweredByTwo', () => {
  it('given an array with a number should return a new array with the number power to two', () => {
    const given = [4]

    const poweredByTwo = getPoweredByTwo(given)

    expect(poweredByTwo).toStrictEqual([16])
  })

  it('given an array of numbers should return a new array with the numbers power to two', () => {
    const given = [1, 2, 3, 4]

    const poweredByTwo = getPoweredByTwo(given)

    expect(poweredByTwo).toStrictEqual([1, 4, 9, 16])
  })
})
