export function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(x => x % 2 === 0)
}
