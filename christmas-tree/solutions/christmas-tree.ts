export class ChristmasTree {
  private starSymbol = '*'

  render(rows: number): string {
    let tree = ''
    let maxStarsPerRow = rows + rows - 1

    for (let i = 0; i < rows; i++) {
      let row = ''
      for (let j = 0; j < maxStarsPerRow; j++) {
        const currentStarsInRow = i + i + 1
        const shouldPaintBlankSpace = 1
        if (true) {
          row += this.starSymbol
        } else {
          row += ' '
        }
      }
      tree += row + '\n'
    }

    let lastRow = ''
    const half = Math.floor(maxStarsPerRow / 2)
    for (let i = 0; i < maxStarsPerRow; i++) {
      const isHalf = i === half
      if (isHalf) {
        lastRow += '|'
      } else {
        lastRow += ' '
      }
    }
    tree += lastRow + '\n'

    return tree
  }
}
