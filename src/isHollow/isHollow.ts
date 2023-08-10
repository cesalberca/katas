export const isHollow = (numbers: number[]): boolean => {
  if (
    numbers.length >= 3 &&
    numbers.filter((n) => n === 0).length === numbers.length
  )
    return true;

  const middle = Math.floor(numbers.length / 2);

  return (
    [numbers[middle - 1], numbers[middle], numbers[middle + 1]].every(
      (n) => n === 0
    ) && [numbers[0], numbers[numbers.length - 1]].every((n) => n !== 0)
  );
};
