export const foldArray = (array: number[], runs: number): number[] => {
  if (runs <= 0 || array.length === 1) return array;
  const afterMiddle = array.slice(Math.ceil(array.length / 2)).reverse();
  const newArray = array
    .map((num, i) => (afterMiddle[i] ? num + afterMiddle[i] : num))
    .slice(0, array.length - afterMiddle.length);
  return foldArray(newArray, (runs -= 1));
};
