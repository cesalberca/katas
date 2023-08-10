export const multiplicationTable = (num: number): number[][] => {
  return Array.from({ length: num }, (_, i) => i + 1).map((x, _, arr) => {
    return arr.map((y) => y * x);
  });
};
