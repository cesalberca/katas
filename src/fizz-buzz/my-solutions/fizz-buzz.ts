export function fizzBuzz(number: number): (string | number)[] {
  let converted_array = []
  for (let i = number; i >= 1; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      converted_array.unshift('fizzbuzz')
    } else if (i % 3 === 0) {
      converted_array.unshift('fizz')
    } else if (i % 5 === 0) {
      converted_array.unshift('buzz')
    } else {
      converted_array.unshift(i)
    }
  }
  return converted_array
}
