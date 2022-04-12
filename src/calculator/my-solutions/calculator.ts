export const calculator = (operation: string): number => {
  const myRegex = /[0-9] | + | -/gi;
  if (!myRegex.test(operation)) return 0;

  return eval(operation);
};
