export const canConstruct = (
  target: string,
  words: string[],
  memo: Record<string, boolean> = {}
) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, words, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return memo[target];
};
