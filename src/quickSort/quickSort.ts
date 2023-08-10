export const quickSort = (list: number[]) => {
  let sorted: number[] = [];
  if (list.length === 0) return list;
  let l: number[] = [];
  let m = list[0];
  let h: number[] = [];

  list.slice(1).forEach((num) => {
    if (num < m) {
      l = [...l, num];
    } else {
      h = [...h, num];
    }
  });

  sorted = sorted.concat(quickSort(l));
  sorted = sorted.concat([m]);
  sorted = sorted.concat(quickSort(h));

  return sorted;
};
