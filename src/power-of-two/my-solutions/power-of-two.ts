export function powerOfTwo(numbers: number[]): number[] {
  let converted_value = []
  for (let i = 0; i < numbers.length; i++) {
    converted_value.push(numbers[i] ** 2)
  }
  return converted_value
}

export function powerOfTwo2(numbers: number[]): number[] {
  return numbers.map(number => number ** 2)
}
