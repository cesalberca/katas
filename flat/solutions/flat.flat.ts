export function flat<T>(...arrays: T[]) {
  return arrays.flat(Infinity)
}
