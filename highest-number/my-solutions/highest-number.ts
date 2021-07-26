export function getHighestNumber(numbers: number[]): number {
  return numbers.slice().sort((a, b) => b - a)[0]
}
