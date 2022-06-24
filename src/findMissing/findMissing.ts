export const findMissing = (list: number[]): number => {
  const differenceList = [];

  for (let i = 0; i < list.length; i++) {
    i !== list.length - 1
      ? differenceList.push(list[i + 1] - list[i])
      : differenceList.push(list[i] - list[i - 1]);
  }

  const min = Math.min(...differenceList);
  const max = Math.max(...differenceList);

  const helper = min < 0 ? max : min;

  let index: any;

  for (let i = 0; i < differenceList.length; i++) {
    if (helper !== differenceList[i]) {
      index = i;
    }
  }

  return index === list.length - 1
    ? list[index] - helper
    : list[index] + helper;
};
