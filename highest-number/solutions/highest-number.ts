export function getHighestNumber(numbers: number[]): number {
  return numbers.reduce((acc: number, value: number) => (value > acc ? value : acc))
}
