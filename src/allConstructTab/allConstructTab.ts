export const allConstructTab = (target: string, wordBank: string[]) => {
  const table: any[][] = Array(target.length + 1)
    .fill(0)
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) !== word) continue;
      const newCombination = table[i].map((subArray) => [...subArray, word]);
      table[i + word.length].push(...newCombination);
    }
  }

  return table[target.length];
};
