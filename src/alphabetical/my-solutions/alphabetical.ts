export const alphabetical = (arr: string[]): string[] => {
  return arr.sort((a, b) => (a < b ? -1 : 1))
}
