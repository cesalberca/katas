export function fruitCounter(given: string[]) {
  return given.reduce((acc: Record<string, number>, currentValue) => {
    if (acc[currentValue] === undefined) {
      acc[currentValue] = 1
    } else {
      acc[currentValue]++
    }
    return acc
  }, {})
}
