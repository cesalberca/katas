import { BottleNumberFactory } from './bottle-number-factory'

export class Bottles {
  sing(starting: number, ending: number = 0) {
    return this.range(starting, ending)
      .map(number => this.verse(number))
      .join('\n')
  }

  verse(number: number) {
    const bottleNumber = BottleNumberFactory.for(number)

    return (
      this.capitalizeWord(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${BottleNumberFactory.for(bottleNumber.successor())} of beer on the wall.\n`
    )
  }

  private range(start: number, end: number) {
    const offset = end === 0 ? 0 : start - 2
    return Array.from({ length: start - end + 1 }, (_, k) => k + offset)
      .slice()
      .reverse()
  }

  capitalizeWord(string: string): string {
    return string.substring(0, 1).toUpperCase() + string.substring(1)
  }
}
