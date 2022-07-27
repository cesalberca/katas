export const canSumTab = (target: number, numbers: number[]): boolean => {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table.at(target);
};
