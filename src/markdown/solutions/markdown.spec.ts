import { describe, it, expect } from 'vitest'
import { WordWrapper } from './markdown'

describe('Markdown', () => {
  it('should add a new line when the text does not fit inside the given column length', () => {
    const { markdown } = setup()
    const text = 'ab'
    const columnLength = 1

    const actual = markdown.wrap(text, columnLength)

    expect(actual).toBe('a\nb')
  })

  it('should add as many new lines as needed so the text never overflows the given column length', () => {
    const { markdown } = setup()
    const text = 'abc'
    const columnLength = 1

    const actual = markdown.wrap(text, columnLength)

    expect(actual).toBe('a\nb\nc')
  })
})

function setup() {
  return {
    longText: 'abc',
    markdown: new WordWrapper()
  }
}
