export function getHighestNumber(numbers: number[]): number {
  return numbers
    .slice()
    .sort((a, b) => a - b)
    .reverse()[0]
}
