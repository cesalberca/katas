import { grouper } from './for-each.grouper'

describe('grouper', () => {
  it('should group all objects by a property', () => {
    const given = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ]

    const actual = grouper(given)

    expect(actual).toEqual({
      20: ['Max', 'Jane'],
      21: ['Alice']
    })
  })
})
