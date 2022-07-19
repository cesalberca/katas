export const fibTab = (num: number) => {
  if (num === 0) return 0;
  let fibSuite = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    fibSuite = [...fibSuite, fibSuite[i - 1] + fibSuite[i - 2]];
  }
  return fibSuite[fibSuite.length - 1];
};
