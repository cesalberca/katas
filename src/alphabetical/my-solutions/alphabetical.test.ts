import { alphabetical } from './alphabetical'

describe('alphabetical', () => {
  it("should be ['a']", () => {
    const result = alphabetical(['a'])
    expect(result).toEqual(['a'])
  })

  it("should be ['a', 'b']", () => {
    const result = alphabetical(['b', 'a'])

    expect(result).toEqual(['a', 'b'])
  })

  it("should be ['a', 'b', 'c']", () => {
    const result = alphabetical(['b', 'a', 'c'])

    expect(result).toEqual(['a', 'b', 'c'])
  })
})
