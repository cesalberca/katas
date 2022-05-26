import { consecutive } from './consecutive'
describe('consecutive', () => {
  it('should be false if the numbers are not in the list', () => {
    expect(consecutive([1, 2, 3, 4], 6, 9)).toBe(false)
  })

  it('should be true if the numbers are  in the list and consecutive', () => {
    expect(consecutive([1, 6, 9, 4], 6, 9)).toBe(true)
  })

  it('should be false if there is only one of the number in the list', () => {
    expect(consecutive([1, 6, 7, 4], 6, 9)).toBe(false)
  })

  it('should be false if the numbers are not consecutive in the list', () => {
    expect(consecutive([6, 8, 7, 9], 6, 9)).toBe(false)
  })
})
