import { G964 } from './stats'
describe('stats', () => {
  it('should return an empty string when there is no times', () => {
    const stats = new G964()

    expect(stats.stat('')).toBe('')
  })

  it('should display the score for range, mea, and median when there is only one score', () => {
    const stats = new G964()
    expect(stats.stat('01|15|59')).toBe('Range: 01|15|59 Average: 01|15|59 Median: 01|15|59')
  })

  it('should siplay the range, the average and the median for two scrores', () => {
    const stats = new G964()
    expect(stats.stat('01|15|59')).toBe('Range: 01|15|59 Average: 01|15|59 Median: 01|15|59')
  })
})
