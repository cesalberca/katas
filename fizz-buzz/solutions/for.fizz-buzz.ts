export function fizzBuzz(number: number) {
  const list = []
  for (let i = 1; i <= number; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0
    if (isDivisibleByThree && isDivisibleByFive) {
      list.push('fizzbuzz')
    } else if (isDivisibleByFive) {
      list.push('buzz')
    } else if (isDivisibleByThree) {
      list.push('fizz')
    } else {
      list.push(i)
    }
  }
  return list
}
