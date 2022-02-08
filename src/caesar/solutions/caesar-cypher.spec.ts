import { cypher } from './caesar-cypher'

describe('cypher', () => {
  it('should shift by one position', () => {
    const given = 'abc'

    const actual = cypher(given, 1)

    expect(actual).toBe('bdf')
  })

  it('should shift by two positions initially', () => {
    const given = 'abc'

    const actual = cypher(given, 2)

    expect(actual).toBe('ceg')
  })

  it('should handle overflow of the alphabet', () => {
    const given = 'xyz'

    const actual = cypher(given, 1)

    expect(actual).toBe('yac')
  })
})
