export class WordWrapper {
  wrap(text: string, columnLength: number): string {
    if (text.length <= columnLength) {
      return text
    }

    const wrappedText = text.substring(0, columnLength) + '\n'
    const remainingText = text.substring(columnLength)
    return wrappedText + this.wrap(remainingText, columnLength)
  }
}
