import { describe, it, expect } from 'vitest'
import { getAlphabeticallySorted } from './alphabetical'

describe('alphabetical', () => {
  it('should sort alphabetically', () => {
    const given = ['javascript', 'java', 'python', 'lua']

    const actual = getAlphabeticallySorted(given)

    expect(actual).toEqual(['java', 'javascript', 'lua', 'python'])
  })
})
