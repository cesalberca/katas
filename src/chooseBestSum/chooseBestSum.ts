export const chooseBestSum = (
  target: number,
  numberOfTown: number,
  distances: number[],
  sum = 0
): number | null => {
  if (distances.length < numberOfTown) return null;
  if (numberOfTown === 0) return sum;

  let bestSum: number = 0;
  let newDistances = [...distances];

  for (let distance of distances) {
    newDistances = newDistances.slice(1);
    const output = chooseBestSum(
      target,
      numberOfTown - 1,
      newDistances,
      sum + distance
    );
    if (output && output > bestSum && output <= target) {
      bestSum = output;
    }
  }
  if (bestSum === 0) return null;
  return bestSum;
};
