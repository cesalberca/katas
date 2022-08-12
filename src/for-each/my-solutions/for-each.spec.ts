import { forEach } from './for-each'

describe('forEach', () => {
  it('should execute a callback for the element its iterating over', () => {
    const given = [1, 2, 3]
    let total = 0

    forEach(given, () => {
      total++
    })

    expect(total).toBe(3)
  })

  it('shoud acces the element it it iterating over', () => {
    const given = [1, 2, 3]

    const actual: number[] = []

    forEach(given, element => {
      actual.push(element)
    })

    expect(actual).toEqual([1, 2, 3])
  })
})
