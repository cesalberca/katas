export function getHighestNumber(numbers: number[]) {
  numbers.sort((a, b) => a - b)
  return numbers[0]
}
