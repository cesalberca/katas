export function fizzBuzz(number: number) {
  const listOfNumbers = []
  for (let i = 1; i <= number; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0
    let value: number | string = ''
    if (isDivisibleByThree) value = 'fizz'
    if (isDivisibleByFive) value = 'buzz'
    if (isDivisibleByThree && isDivisibleByFive) value = 'fizzbuzz'
    if (value === '') value = i
    listOfNumbers.push(value)
  }
  return listOfNumbers
}
