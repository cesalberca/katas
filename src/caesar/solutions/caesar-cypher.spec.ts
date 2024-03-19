import { describe, it, expect } from 'vitest'
import { cypher } from './caesar-cypher'

describe('caesarCypher', () => {
  it('should return an empty string when given an empty string', () => {
    expect(cypher('', 1)).toBe('')
  })
  it('should shift the letters of the alphabet by the given number', () => {
    expect(cypher('abcd', 1)).toBe('bdfh')
  })

  it('should ignore the blank spaces to increase the shift', () => {
    expect(cypher('a b c d', 1)).toBe('b d f h')
  })

  it('should work with negative shifts', () => {
    expect(cypher('abcd', -1)).toBe('zbdf')
  })

  it('should work with large shifts', () => {
    expect(cypher('abcd', 27)).toBe('bdfh')
  })

  it('should work with large negative shifts', () => {
    expect(cypher('abcd', -27)).toBe('zbdf')
  })

  it('should work with the example from the README', () => {
    expect(cypher('I should have known that you would have a perfect answer for me!!!', 1)).toBe(
      'J ukszrk pjfp wacld kztn tkr unumf keak h xnbqqph pdjoxl ako kd!!!'
    )
  })
})
