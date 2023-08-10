export const primeNumber = (n: number): number[] => {
  let factors: number[] = [];

  for (let divisor = 2; n > 1; divisor++)
    for (; n % divisor === 0; n /= divisor) factors = [...factors, divisor];

  return factors;
};
