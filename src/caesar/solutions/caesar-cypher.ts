const _ALPHABET = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
const _HIGH_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const cypher = (str: string, shift: number): string => {
  if (str.length === 0) return ''
  let decypheredString = ''
  for (const char of str) {
    const index: number = _ALPHABET.indexOf(char)
    const upperIndex: number = _HIGH_ALPHABET.indexOf(char)
    if (index !== -1 || upperIndex !== -1) {
      const isLowerCase: boolean = index !== -1
      const auxIndex = isLowerCase ? index : upperIndex
      let currentIndex = auxIndex + shift
      while (currentIndex < 0) {
        currentIndex += 26
      }
      decypheredString += isLowerCase
        ? _ALPHABET[currentIndex % 26]
        : _HIGH_ALPHABET[currentIndex % 26]
      shift++
    } else {
      decypheredString += char
    }
  }
  return decypheredString
}
