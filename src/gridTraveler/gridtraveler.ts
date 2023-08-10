export const gridtraveler = (
  x: number,
  y: number,
  memo: Record<string, number> = {}
): number => {
  if (`${x},${y}` in memo) return memo[`${x},${y}`];
  if (y === 0 || x === 0) return 0;
  if (y === 1 && x === 1) return 1;
  memo[`${x},${y}`] =
    gridtraveler(x - 1, y, memo) + gridtraveler(x, y - 1, memo);
  return memo[`${x},${y}`];
};
