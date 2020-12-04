export function getPoweredByTwo(numbers: number[]): number[] {
  const powered = []

  for (let i = 0; i < numbers.length; i++) {
    powered.push(numbers[i] ** 2)
  }

  return powered
}
