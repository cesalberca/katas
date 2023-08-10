const isNotValid = (nums: number[]) =>
  !nums.length || nums.some((num) => num < 0 || num > 9);

export const upArray = (nums: number[]) => {
  if (isNotValid(nums)) return null;

  if (nums.every((num) => num === 9)) {
    return [1, ...Array.from({ length: nums.length }, (_) => 0)];
  }
  let stop = false;

  return nums.reduce((acc: number[], curr, i) => {
    if (stop) return acc;
    if (nums.slice(i + 1).every((num) => num === 9)) {
      stop = true;
      return [
        ...acc,
        ...[
          curr + 1,
          ...Array.from({ length: nums.slice(i + 1).length }, (_) => 0),
        ],
      ];
    }
    return [...acc, curr];
  }, []);
};
