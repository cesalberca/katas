export function getAlphabeticallySorted(given: string[]) {
  return given.sort((a, b) => a.localeCompare(b))
}
