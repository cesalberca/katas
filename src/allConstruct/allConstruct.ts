export const allConstruct = (
  target: string,
  wordBank: string[],
  memo: Record<string, string[][]> = {}
): string[] | string[][] => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way: string | string[]) => [
        word,
        ...way,
      ]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return memo[target];
};
