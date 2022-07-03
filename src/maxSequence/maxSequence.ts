interface Saver {
  num: number;
  arr: number[];
}

export const maxSequence = function (arr: number[]): any {
  let maxGlobal = arr[0] || 0;
  let curr = maxGlobal;

  arr.slice(1).forEach((num) => {
    curr = Math.max(num, curr + num);
    if (maxGlobal < curr) {
      maxGlobal = curr;
    }
  });

  return maxGlobal >= 0 ? maxGlobal : 0;
};
