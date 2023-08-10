import { add, addStringWithSpace } from './functions'

describe('functions', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })

  describe('addString', () => {
    it('should add the two string', () => {
      expect(addStringWithSpace('Clément', 'Gombauld')).toBe('Clément Gombauld')
    })

    it('should only print the first string if there is no second string', () => {
      expect(addStringWithSpace('a')).toBe('a ')
    })
  })
})
