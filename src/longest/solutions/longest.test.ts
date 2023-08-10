import { G964 } from './longest'

describe('longest', () => {
  it('should be an empty string when s1 and s2 are empty', () => {
    expect(G964.longest('', '')).toBe('')
  })

  it('should be the content of s1 when there is a letter in s1', () => {
    expect(G964.longest('a', '')).toBe('a')
  })

  it('should be the content of s2 when there is a letter in s1', () => {
    expect(G964.longest('', 'a')).toBe('a')
  })

  it("shouldn't have any duplicate letter in the result", () => {
    expect(G964.longest('a', 'a')).toBe('a')
  })

  it('the result have to be sorted alphabetically', () => {
    expect(G964.longest('b', 'a')).toBe('ab')
  })

  it('should handle when i pass only one argument', () => {
    expect(G964.longest('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz')
  })

  it('should pass the accepatce test', () => {
    expect(G964.longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')).toBe('abcdefklmopqwxy')
  })
})
