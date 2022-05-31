const pipe =
  (...fns: any) =>
  (x: any) =>
    fns.reduce((y: any, f: any) => f(y), x);

const stringify = (num: number) => num.toString();

const splitByEachChars = (str: string): string[] => str.split("");

const squareEachNumberByThelengthOfItsArrAndSum = (strArr: string[]): number =>
  strArr.reduce(
    (acc, curr, _, arr) => acc + Math.pow(+curr, arr.length),

    0
  );

const narcisstifyNumber = pipe(
  stringify,
  splitByEachChars,
  squareEachNumberByThelengthOfItsArrAndSum
);

export const isNarcissistic = (n: number): boolean =>
  n === narcisstifyNumber(n);
