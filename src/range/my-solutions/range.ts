const generateListNumWhen = (numf: number, nume = 0) => {
  return Array.from({ length: numf - nume }).map((_, i) => i + nume);
};

export const range = (num1: number, num2?: number) => {
  if ((num2 && num1 > num2) || num2 === 0) {
    return [num1, ...generateListNumWhen(num1, num2).reverse()];
  }

  if (num2) return [...generateListNumWhen(num2, num1).map((_, i) => i + num1), num2];
  return [...Array.from({ length: num1 }).map((_, i) => i), num1];
};
