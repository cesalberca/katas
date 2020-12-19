import { ChristmasTree } from './christmas-tree'

describe('ChristmasTree', () => {
  it('should render a tree with 3 rows', () => {
    const christmasTree = new ChristmasTree()

    const actual = christmasTree.render(3)

    expect(actual).toBe(`  *
 ***
*****
  |
`)
  })
})
