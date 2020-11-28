export type MultiDimensionalArray<T> = (T | (T | T[])[])[]

export function flat<T>(...arrays: MultiDimensionalArray<T>): T[] {
  const result: T[] = []
  for (const array of arrays) {
    result.push(...array)
  }
  return result
}
