export const howSumTab = (
  target: number,
  numbers: number[]
): number[] | null => {
  const table = new Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table.at(target);
};
