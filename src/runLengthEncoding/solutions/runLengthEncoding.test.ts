import { runLengthEncoding } from './runLengthEncoding'

describe('run length encoding', () => {
  it('should handle empty string', () => {
    expect(runLengthEncoding('')).toEqual([])
  })

  it('should handle the case with another chars that empty string', () => {
    expect(runLengthEncoding('a')).toEqual([[1, 'a']])
  })

  it('should handle when there is multiple same chars', () => {
    expect(runLengthEncoding('aa')).toEqual([[2, 'a']])
  })

  it('should handle when there is two different chars', () => {
    expect(runLengthEncoding('ab')).toEqual([
      [1, 'a'],
      [1, 'b']
    ])
  })

  it('should pass when there is no conscutive chars', () => {
    expect(runLengthEncoding('aba')).toEqual([
      [1, 'a'],
      [1, 'b'],
      [1, 'a']
    ])
  })

  it('should pass the acceptance test', () => {
    expect(
      runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW')
    ).toEqual([
      [12, 'W'],
      [1, 'B'],
      [12, 'W'],
      [3, 'B'],
      [24, 'W'],
      [1, 'B'],
      [14, 'W']
    ])
  })
})
