export function getEvenNumbers(numbers: number[]): number[] {
  const evenNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers
}
