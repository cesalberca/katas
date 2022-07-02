interface Output {
  result: number[];
  previousValues: Record<number, number>;
}

export const twoSum = (nums: number[], target: number) =>
  nums.reduce(
    (obj: Output, num, i) => {
      if (obj.result.length === 2) return obj;
      const needeedNum = target - num;
      if (obj.previousValues[needeedNum] !== undefined) {
        return {
          result: [obj.previousValues[needeedNum], i],
          previousValues: obj.previousValues,
        };
      }
      return {
        result: [],
        previousValues: { ...obj.previousValues, [num]: i },
      };
    },
    { result: [], previousValues: {} }
  ).result;
