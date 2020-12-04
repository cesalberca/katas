export function getTotal(given: number[]) {
  return given.reduce((sum, number) => sum + number, 0)
}
