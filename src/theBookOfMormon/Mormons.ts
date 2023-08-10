export const Mormons = (
  startingNum: number,
  reach: number,
  target: number,
  missons = 0
): number =>
  startingNum >= target
    ? missons
    : Mormons(startingNum + reach * startingNum, reach, target, missons + 1);
