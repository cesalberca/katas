import { Bottles } from './bottles'

describe('BeerSong', () => {
  const song = new Bottles()

  it('prints an arbitrary verse', () => {
    const expected =
      '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n'

    const actual = song.verse(8)

    expect(actual).toEqual(expected)
  })

  it('handles 2 bottles', () => {
    const expected =
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'

    const actual = song.verse(2)

    expect(actual).toEqual(expected)
  })

  it('handles 1 bottle', () => {
    const expected =
      '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'

    const actual = song.verse(1)

    expect(actual).toEqual(expected)
  })

  it('handles 0 bottles', () => {
    const expected =
      'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

    const actual = song.verse(0)

    expect(actual).toEqual(expected)
  })

  it('sings several verses', () => {
    const expected =
      '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n'

    const actual = song.sing(8, 6)

    expect(actual).toEqual(expected)
  })

  it('sings the rest of the verses', () => {
    const expected =
      '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

    const actual = song.sing(3)

    expect(actual).toEqual(expected)
  })
})
