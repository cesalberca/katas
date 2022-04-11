export const addAllNumbers = (numbers: number[]) => {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
