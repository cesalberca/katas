const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((v: any, f: any) => f(v), x)

const splitByStringByDoubleQuote = (str: string): string[] => str.split('')
const mapOverDnaAndInverseLetterType = (dna: string[]): ('T' | 'A' | 'G' | 'C' | undefined)[] =>
  dna.map(danL => {
    if (danL === 'A') return 'T'
    if (danL === 'T') return 'A'
    if (danL === 'C') return 'G'
    if (danL === 'G') return 'C'
  })
const joinStringByDoubleQuote = (arr: string[]): string => arr.join('')

export class Kata {
  static dnaStrand(dna: string): string {
    if (dna.length === 0) return dna

    return pipe(
      splitByStringByDoubleQuote,
      mapOverDnaAndInverseLetterType,
      joinStringByDoubleQuote
    )(dna)
  }
}
