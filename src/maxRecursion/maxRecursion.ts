export const max = (array: number[], maxNum = -Infinity): number => {
  if (array.length === 0) return maxNum;
  const newMax = array[0] > maxNum ? array[0] : maxNum;
  return max(array.slice(1), newMax);
};
