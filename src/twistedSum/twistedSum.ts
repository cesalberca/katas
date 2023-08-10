const SumNumOrNumStr = (acc: number, curr: number | string): number =>
  typeof curr === "number" ? acc + curr : acc + +curr;

export const twistedSum = (num: number): number => {
  if (num === 0) return 0;
  return Array.from({ length: num }, (_, i) =>
    (i + 1).toString().split("").reduce(SumNumOrNumStr, 0)
  ).reduce(SumNumOrNumStr, 0);
};
