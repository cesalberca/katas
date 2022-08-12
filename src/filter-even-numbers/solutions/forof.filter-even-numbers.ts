export function getEvenNumbers(numbers: number[]): number[] {
  const evenNumbers = []
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number)
    }
  }
  return evenNumbers
}
