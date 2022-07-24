export const gridTravelerTab = (m: number, n: number) => {
  const table = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const currentPosition = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += currentPosition;
      if (i + 1 <= m) table[i + 1][j] += currentPosition;
    }
  }
  return table[m][n];
};
