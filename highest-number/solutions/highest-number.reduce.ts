export function getHighestNumber(numbers: number[]): number {
  return numbers.reduce((acc, value) => (value > acc ? value : acc))
}
