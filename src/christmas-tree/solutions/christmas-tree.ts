export class ChristmasTree {
  render(rows: number): string {
    let maxStarsPerRow = rows + rows - 1

    const treeArr: string[] = []

    for (let i = 0; i < rows; i++) {
      const currentStarsInRow = i + i + 1
      let row = ''
      for (let j = 0; j < currentStarsInRow; j++) {
        row += '*'
      }
      treeArr.push(row)
    }

    const finalTree = treeArr
      .map((x, i) => {
        const paddedSpaces = Math.floor(maxStarsPerRow / 2) + i * -1
        return x.padStart(paddedSpaces).padEnd(paddedSpaces)
      })
      .join('\n')

    return this.addTrunk(maxStarsPerRow, finalTree + '\n')
  }

  private addTrunk(maxStarsPerRow: number, tree: string) {
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
