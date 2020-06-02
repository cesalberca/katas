export function fizzBuzz(number: number) {
  return Array.from({ length: number }, (_, k) => k + 1).map(x =>
    x % 3 === 0 ? 'fizz' : x % 5 === 0 ? 'buzz' : x
  )
}
