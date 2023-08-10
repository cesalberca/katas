export const stringTransformer = (str: string): string =>
  str
    .split("")
    .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
