export function groupIn10s(...numbers: number[]): (number[] | undefined)[] {
  const numsSorted = numbers.slice().sort((a, b) => a - b);
  let result = [];
  let start = 0;
  let end = 10;
  while (
    numbers.find((n) => n >= start) ||
    numbers.find((n) => n >= start) === 0
  ) {
    const batch = numsSorted.filter((n) => n >= start && n < end);
    start += 10;
    end += 10;
    !batch.length ? result.push(undefined) : result.push(batch);
  }
  return result;
}
