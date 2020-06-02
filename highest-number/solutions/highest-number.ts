export function getHighestNumber(numbers: number[]): number {
  return numbers.slice().sort()[numbers.length - 1]
}
