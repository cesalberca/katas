export const christmasTree = (rows: number): string => {
  let tree: string = ''
  let numberSpaces: number = rows - 1
  tree = generateRow(rows, tree, numberSpaces)
  tree = generateTrunk(rows, tree)
  return tree
}

const generateTrunk = (rows: number, tree: string): string => {
  for (let i: number = 0; i < rows; i++) {
    tree += i === rows - 1 ? '|' : ' '
  }
  return tree
}

const generateRow = (rows: number, tree: string, numberSpaces: number): string => {
  for (let i: number = 0; i < rows; i++) {
    for (let o: number = 0; o < rows + i; o++) {
      tree += o < numberSpaces ? ' ' : '*'
    }
    numberSpaces--
    tree += '\n'
  }
  return tree
}
