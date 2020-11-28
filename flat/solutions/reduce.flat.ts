export function flat<T extends []>(...arrays: T[]) {
  return arrays.reduce((accumulator, value) => [...accumulator, ...value], [])
}
