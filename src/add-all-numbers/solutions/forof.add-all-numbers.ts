export function getTotal(numbers: number[]) {
  let total = 0

  for (const number of numbers) {
    total += number
  }

  return total
}
