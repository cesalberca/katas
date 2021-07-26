import { alphabeticallySorted } from './alphabetical'

describe('alphabeticallySorted', () => {
  it('should return a list of the same length', () => {
    const given = ['Sil', 'Ger', 'Nine']

    const actual = alphabeticallySorted(given)

    expect(actual.length).toBe(given.length)
  })

  it('should return a list alphabetically sorted', () => {
    const given = ['German', 'Zambomba', 'America']

    const actual = alphabeticallySorted(given)

    expect(actual).toEqual(['America', 'German', 'Zambomba'])
  })
})
