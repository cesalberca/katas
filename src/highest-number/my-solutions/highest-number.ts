export function getHighestNumber(numbers: number[]): number {
  let highest = 0

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i]
    }
  }
  return highest
}

export function getHighestNumberSpread(numbers: number[]): number {
  return Math.max(...numbers.map(v => v))
}
