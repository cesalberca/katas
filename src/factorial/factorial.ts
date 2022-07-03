export const factorial = (n: number): number =>
  n <= 1 ? 1 : n * factorial(n - 1);
