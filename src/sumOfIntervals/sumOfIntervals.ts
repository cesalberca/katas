interface MinAndMaxInterVal {
  min: number | undefined;
  max: number | undefined;
}

export function sumOfIntervals(intervals: [number, number][]) {
  const minAndMaxInterval: MinAndMaxInterVal = {
    min: undefined,
    max: undefined,
  };

  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [min, max]) => {
      if (!minAndMaxInterval.min && !minAndMaxInterval.max) {
        minAndMaxInterval.min = min;
        minAndMaxInterval.max = max;
        return (acc = acc + (max - min));
      }

      if (minAndMaxInterval.max && min > minAndMaxInterval.max) {
        minAndMaxInterval.max = max;
        return acc + (max - min);
      }

      if (minAndMaxInterval.max && max > minAndMaxInterval?.max) {
        acc += max - minAndMaxInterval?.max;
        minAndMaxInterval.max = max;

        return acc;
      }

      return acc;
    }, 0);
}
