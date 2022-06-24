const findMaxInSubString = (str: string): number =>
  str
    .split("")
    .map((s) => +s.charCodeAt(0) - 96)
    .reduce((acc, curr) => acc + curr, 0);

export const solve = (str: string) =>
  Math.max(...str.split(/a|e|i|o|u/).map((s) => findMaxInSubString(s)));
