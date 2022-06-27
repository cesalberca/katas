const isEven = (num: number): boolean => num % 2 === 0;
export const dashatize = (num: number): string => {
  if (!Number.isInteger(num)) return "NaN";
  return Math.abs(num)
    .toString()
    .split("")
    .map((strNum, i, strNums) => {
      if (
        strNums[i + 1] &&
        !isEven(+strNums[i + 1]) &&
        strNums[i - 1] &&
        !isEven(+strNums[i - 1])
      )
        return `-${strNum}-`;
      if (strNums[i + 1] && !isEven(+strNums[i + 1])) return `${strNum}-`;
      if (strNums[i - 1] && !isEven(+strNums[i - 1]) && +strNum % 2 === 0)
        return `-${strNum}`;
      return Math.abs(+strNum);
    })
    .join("");
};
