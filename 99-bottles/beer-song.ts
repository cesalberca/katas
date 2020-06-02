export class BeerSong {
  verse(number: number) {
    switch (number) {
      case 2:
        return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number - 1} bottles of beer on the wall.\n`
    }
  }

  sing(starting: number, ending = 0) {
    const song = []
    for (let i = starting; i >= ending; i--) {
      song.push(this.verse(i))
    }
    return song.join('\n')
  }
}
