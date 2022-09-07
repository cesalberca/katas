const swap = (list: number[], i: number) => {
  const temp = list[i];
  list[i] = list[i + 1];
  list[i + 1] = temp;
};

const isOutOfOrder = (list: number[], i: number) => list[i] > list[i + 1];

export const sort = (list: number[]) => {
  for (let size = list.length; size > 0; size--) {
    list.forEach((_, i) => {
      if (isOutOfOrder(list, i)) swap(list, i);
    });
  }

  return list;
};
