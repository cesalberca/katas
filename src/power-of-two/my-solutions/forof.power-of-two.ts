export function getPoweredByTwo(numbers: number[]) {
  const poweredByTwo = []
  for (const number of numbers) {
    poweredByTwo.push(Math.pow(number, 2))
  }
  return poweredByTwo
}
