import { WordWrapper } from './word-wrap'

describe('WordWrapper', () => {
  it('should add a new line when the text does not fit inside the given column length', () => {
    const { wordWrapper } = setup()
    const text = 'ab'
    const columnLength = 1

    const actual = wordWrapper.wrap(text, columnLength)

    expect(actual).toBe('a\nb')
  })

  it('should add as many new lines as needed so the text never overflows the given column length', () => {
    const { wordWrapper } = setup()
    const text = 'abc'
    const columnLength = 1

    const actual = wordWrapper.wrap(text, columnLength)

    expect(actual).toBe('a\nb\nc')
  })
})

function setup() {
  return {
    longText: 'abc',
    wordWrapper: new WordWrapper()
  }
}
