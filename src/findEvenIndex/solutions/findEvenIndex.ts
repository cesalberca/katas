export function findEvenIndex(list: number[]): number {
  let right = list.reduce((acc, curr) => acc + curr, 0);
  let left = 0;

  const result = list.reduce((acc: number[], curr, i) => {
    right = right - curr;
    if (left === right) acc = [...acc, i];
    left = left + curr;
    return acc;
  }, []);

  if (result.length > 0) return result[0];

  return -1;
}

// const sumArr = (arr: number[]): number =>
//   arr.reduce((sum, num) => sum + num, 0);

// export const findEvenIndex = (list: number[]): number =>
//   list.findIndex((_, i) => {
//     const leftArr = list.slice(0, i);
//     const rightArr = list.slice(i + 1);

//     return sumArr(leftArr) === sumArr(rightArr);
//   });
