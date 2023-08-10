export const solution = (roman: string): number => {
  const converter: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return roman.split("").reduce((number, romanNum, i, romanNums) => {
    if (romanNum === "V" && romanNums[i - 1] === "I")
      return number + (converter[romanNum] - 2);
    if (romanNum === "X" && romanNums[i - 1] === "I")
      return number + (converter[romanNum] - 2);
    if (romanNum === "L" && romanNums[i - 1] === "X")
      return number + (converter[romanNum] - 20);
    if (romanNum === "C" && romanNums[i - 1] === "X")
      return number + (converter[romanNum] - 20);
    if (romanNum === "D" && romanNums[i - 1] === "C")
      return number + (converter[romanNum] - 200);
    if (romanNum === "M" && romanNums[i - 1] === "C")
      return number + (converter[romanNum] - 200);
    return number + converter[romanNum];
  }, 0);
};
