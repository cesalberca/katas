import { Kata } from './CompDNA'

describe('Complementary DNA', () => {
  it('should be empty if the list of dna is empty', () => {
    expect(Kata.dnaStrand('')).toBe('')
  })

  it.each`
    inputDNA | outputDNA
    ${'A'}   | ${'T'}
    ${'T'}   | ${'A'}
    ${'C'}   | ${'G'}
    ${'G'}   | ${'C'}
  `("the ouput DNA should be $outputDNA if the input it's inputDNA", ({ inputDNA, outputDNA }) => {
    expect(Kata.dnaStrand(inputDNA)).toBe(outputDNA)
  })

  it('should handle multiple inputDNA', () => {
    expect(Kata.dnaStrand('AA')).toBe('TT')
  })

  it('should handle more complexe case', () => {
    expect(Kata.dnaStrand('GTAT')).toBe('CATA')
    expect(Kata.dnaStrand('ATGC')).toBe('TACG')
  })
})
