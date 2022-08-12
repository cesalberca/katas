import { getHighestNumber } from './sort.highest-number'

describe('getHighestNumber', () => {
  it('given an array with only a number shoud retunr the number', () => {
    const given = [100]

    const highestNumber = getHighestNumber(given)

    expect(highestNumber).toBe(100)
  })
})
