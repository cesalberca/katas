export function fizzBuzz(n: number) {
  let listOfNumbers = []
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? listOfNumbers.push('fizzbuzz')
      : i % 3 === 0
      ? listOfNumbers.push('fizz')
      : i % 5 === 0
      ? listOfNumbers.push('buzz')
      : listOfNumbers.push(i)
  }
  return listOfNumbers
}
