export const highestNumber = (num: number[]) => {
  if (num.length === 0) return 0;

  return Math.max(...num);
};
