export class Calculator {
  calculate(string: string): number {
    const cleanString = string.replace(/ /g, '')
    const sequence = this.getSequence(cleanString)
    const numbers = sequence.map(Number)
    return numbers.reduce((result, value) => result + value, 0)
  }

  private getSequence(string: string) {
    let signedStringifiedNumber = ''
    const sequence = []

    for (let char of string) {
      const isSignFound = ['+', '-'].includes(char)
      if (isSignFound) {
        sequence.push(signedStringifiedNumber)
        signedStringifiedNumber = ''
      }
      signedStringifiedNumber += char
    }

    sequence.push(signedStringifiedNumber)
    return sequence
  }
}
