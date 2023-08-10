export const zipWith = (
  fn: (a: number, b: number) => number,
  a0: number[],
  a1: number[]
) =>
  Array.from({ length: Math.min(a0.length, a1.length) }, (_, i) =>
    fn(a0[i], a1[i])
  );
