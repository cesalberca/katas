export function partsSums(ls: number[]): number[] {
  const all = ls.reduce((acc, curr) => acc + curr, 0);

  if (all === 0) return [0];

  const output = [all];
  let counter = 0;

  while (counter < ls.length) {
    output.push(output[output.length - 1] - ls[counter]);
    counter++;
  }
  return output;
}
