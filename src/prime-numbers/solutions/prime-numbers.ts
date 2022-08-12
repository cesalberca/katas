export class PrimeNumbersFactorer {
  factor(number: number) {
    const primes = []
    const FIRST_PRIME_NUMBER = 2
    let divisor = FIRST_PRIME_NUMBER

    while (number > FIRST_PRIME_NUMBER) {
      if (number % divisor === 0) {
        primes.push(divisor)
        number /= divisor
      } else {
        divisor++
      }
    }

    return primes
  }
}
