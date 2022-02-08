export function getHighestNumber(numbers: number[]) {
  let highestNumber = numbers[0]

  for (const number of numbers) {
    if (number > highestNumber) {
      highestNumber = number
    }
  }

  return highestNumber
}
