export const getLengthOfMissingArray = (arrayOfArrays: any[]): number => {
  const lengtsOfArrays = arrayOfArrays.map((arr) => arr.length);

  if (lengtsOfArrays.includes(0)) return 0;

  return lengtsOfArrays
    .slice()
    .sort((a, b) => a - b)
    .reduce((nums, num, i, arrNums) => {
      if (i === 0) return nums;
      if (num !== arrNums[i - 1] + 1) {
        return (nums = arrNums[i - 1] + 1);
      }
      return nums;
    }, 0);
};
