export const countConstruct = (
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let counter = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numberOfWays = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      counter += numberOfWays;
    }
  }
  memo[target] = counter;

  return counter;
};
