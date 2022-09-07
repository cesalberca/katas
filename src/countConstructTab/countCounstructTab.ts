export const countConstructTab = (
  target: string,
  wordBank: string[]
): number => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) !== word) continue;
      table[i + word.length] += table[i];
    }
  }

  return table[target.length];
};
