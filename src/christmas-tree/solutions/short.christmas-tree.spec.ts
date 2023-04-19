import { christmasTree } from './short.christmas-tree'

describe('christmas-tree', function () {
  it('should print a christmas tree with 3 rows', function () {
    const tree: string = christmasTree(3)
    expect(tree).toBe('  *\n' + ' ***\n' + '*****\n' + '  |')
  })

  it('should print a christmas tree with 5 rows', function () {
    const tree: string = christmasTree(5)
    expect(tree).toBe('    *\n' + '   ***\n' + '  *****\n' + ' *******\n' + '*********\n' + '    |')
  })
})
