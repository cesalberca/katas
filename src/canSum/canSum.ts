export const canSum = (
  target: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
): boolean => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    const remainder = target - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};
