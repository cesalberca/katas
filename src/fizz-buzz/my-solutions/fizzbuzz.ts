export const fizzbuzz = (num: number): (number | string)[] => {
  if (num === 1) return [1]

  let result = []
  let count = 1

  while (count <= num) {
    if (count % 3 === 0) {
      result.push('fizz')
      count++
      continue
    }

    if (count % 5 === 0) {
      result.push('buzz')
      count++
      continue
    }
    result.push(count)
    count++
  }

  return result
}
