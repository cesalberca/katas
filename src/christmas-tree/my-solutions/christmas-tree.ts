const genrateTruncSpaces = (num: number): string => ' '.repeat(Math.floor(num / 2));

const buildTrunc = (num: number): string => `${genrateTruncSpaces(num)}|${genrateTruncSpaces(num)}`;

const generatesStarSpaces = (num: number, i: number): string => ' '.repeat(num - (i + 1));

const generateLine = (num: number, i: number, startCount: number) =>
  `${generatesStarSpaces(num, i)}${'*'.repeat(startCount)}${generatesStarSpaces(num, i)}`;

const assembleChristmasTree = (arr: string[]) => `${arr.join('\n')}\n${buildTrunc(arr[arr.length - 1].length)}`;

const christimasTreeRecur = (num: number, arr: string[] = [], i = 0, startCount = 1): string =>
  i === num
    ? assembleChristmasTree(arr)
    : christimasTreeRecur(num, [...arr, generateLine(num, i, startCount)], i + 1, startCount + 2);

export const christimasTree = (num: number): string => christimasTreeRecur(num, [], 0, 1);
