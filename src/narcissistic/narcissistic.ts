export const narcissistic = (number: number): boolean =>
  number
    .toString()
    .split("")
    .reduce(
      (result, numStr, _, numbers) =>
        result + Math.pow(+numStr, numbers.length),
      0
    ) === number;
