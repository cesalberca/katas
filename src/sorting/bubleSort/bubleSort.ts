export const bubleSort = (array: number[]): number[] => {
  let swapped = false;
  array.forEach((num, i) => {
    if (num > array[i + 1]) {
      array[i] = array[i + 1];
      array[i + 1] = num;
      swapped = true;
    }
  });
  if (swapped === false) return array;
  return bubleSort(array);
};
