export function getTotal(numbers: number[]) {
  return numbers.reduce((number, acc) => acc + number, 0)
}
