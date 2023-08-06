import { christimasTree } from '../christmas-tree';

describe('christimas tree', () => {
  it('should render a christimas tree according to the given number', () => {
    expect(christimasTree(1)).toEqual(`*\n|`);
    expect(christimasTree(2)).toEqual(` * \n***\n | `);
    expect(christimasTree(3)).toEqual(`  *  \n *** \n*****\n  |  `);
    expect(christimasTree(4)).toEqual(`   *   \n  ***  \n ***** \n*******\n   |   `);
  });
});
