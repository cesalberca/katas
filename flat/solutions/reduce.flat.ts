export function flat<T>(...arrays: T[][]): T[] {
  return arrays.reduce((accumulator, value) => [...accumulator, ...value], [])
}
