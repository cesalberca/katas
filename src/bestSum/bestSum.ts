export const bestSum = (
  target: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination: number[] | null = null;

  numbers.forEach((num) => {
    const remainder = target - num;

    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  });

  memo[target] = shortestCombination;

  return shortestCombination;
};
