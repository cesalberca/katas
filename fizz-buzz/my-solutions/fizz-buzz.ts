export const mapFizzBuzz = (number: number) => {
  let numberArr = [1]
  while (number > numberArr.length) {
    numberArr.push(numberArr.length + 1)
  }
  return numberArr.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz'
    }
    if (number % 3 === 0) {
      return 'Fizz'
    }
    if (number % 5 === 0) {
      return 'Buzz'
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
      return number
    }
  })
}
