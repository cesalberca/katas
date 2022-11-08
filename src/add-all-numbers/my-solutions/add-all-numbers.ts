export function addAllNumbers(numbers: number[]): number {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  return result
}

export function addAllNumbers2(numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0)
}
