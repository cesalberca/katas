import { incrementer } from './incrementer'
describe('incrementer', () => {
  it('should return an empty list when there is no number in the list', () => {
    expect(incrementer([])).toEqual([])
  })

  it('shoud increment the number when there is a number in the list', () => {
    expect(incrementer([1])).toEqual([2])
  })

  it('should increment the position of each number by his position in the list', () => {
    expect(incrementer([1, 2])).toEqual([2, 4])
  })

  it('should increment only increase the last digit of the number if his number become two digit', () => {
    expect(incrementer([1, 2, 9])).toEqual([2, 4, 2])
  })

  it('should pass the accepance test', () => {
    expect(incrementer([1, 2, 9, 11, 100])).toEqual([2, 4, 2, 5, 5])
  })
})
