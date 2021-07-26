export function forEach<T>(values: T[], callback: (element: T) => void) {
  values.forEach(element => {
    callback(element)
  })
}
