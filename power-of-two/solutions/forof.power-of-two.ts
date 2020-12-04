export function getPoweredByTwo(numbers: number[]): number[] {
  const powered = []

  for (const number of numbers) {
    powered.push(number ** 2)
  }

  return powered
}
