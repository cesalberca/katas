export const dontGiveMeFive = (start: number, end: number): number => {
  const result = [];

  for (let i = start; i < end + 1; i++) {
    result.push(i);
  }

  return result.filter((num) => !(num + "").includes("5")).length;
};
