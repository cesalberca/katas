import { openOrSenior } from './openOrSenior'

describe('openOrSenior', () => {
  it('should ba a junior when the person is under 55yers old and has an handicap greater than 7 ', () => {
    expect(openOrSenior([[18, 2]])).toEqual(['Open'])
  })

  it('should be a senior when the person is at least 55 years old and has an handicap greater than 7', () => {
    expect(openOrSenior([[55, 8]])).toEqual(['Senior'])
  })

  it('should be able to handle multiple member with same type', () => {
    expect(
      openOrSenior([
        [18, 2],
        [19, 8]
      ])
    ).toEqual(['Open', 'Open'])
  })

  it('should handle multiple senior people', () => {
    expect(
      openOrSenior([
        [55, 8],
        [92, 12]
      ])
    ).toEqual(['Senior', 'Senior'])
  })

  it('should pass the acceptance test ', () => {
    expect(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12]
      ])
    ).toEqual(['Senior', 'Open', 'Open', 'Open'])
  })
})
