export const pyramid = (num: number) => {
  return Array.from({ length: num }, (_, i) => Array(i + 1).fill(1));
};
