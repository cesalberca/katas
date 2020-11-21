export function forEach<T>(values: T[], callback: (element: T) => void) {
  for (let i = 0; i < values.length; i++) {
    callback(values[i])
  }
}
