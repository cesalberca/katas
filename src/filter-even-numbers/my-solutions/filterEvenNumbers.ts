export function filterEvenNumbers(numbers: number[]) {
  return numbers.filter(number => {
    return number % 2 === 0
  })
}
