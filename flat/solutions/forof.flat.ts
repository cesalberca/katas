export function flat<T>(...arrays: T[][]): T[] {
  const result: T[] = []
  for (const array of arrays) {
    result.push(...array)
  }
  return result
}
