export function getHighestNumber(numbers: number[]): number {
  return numbers.slice().sort((num1, num2) => num1 - num2)[numbers.length - 1]
}
