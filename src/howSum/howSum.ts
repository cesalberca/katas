export const howSum = (
  target: number,
  numbers: number[],
  memo: Record<number, number[] | null> = []
): number[] | null => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let number of numbers) {
    const remainder = target - number;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, number];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};
