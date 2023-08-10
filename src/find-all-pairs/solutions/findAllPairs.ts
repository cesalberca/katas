const pipe =
  (...fns: any) =>
  (x: any) =>
    fns.reduce((v: any, f: any) => f(v), x)

const transformArrayOfNumbersInMap = (pairs: number[]): Record<number, number> =>
  pairs.reduce((acc: Record<number, number>, curr: number) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1)
    return acc
  }, {})

const extractValueOfObject = (obj: Record<number, number>): number[] => Object.values(obj)

const summAllPairs = (params: number[]): number =>
  params.reduce((acc: number, curr: number) => acc + Math.floor(curr / 2), 0)

export const findAllPairs = (nums: number[]): number =>
  pipe(transformArrayOfNumbersInMap, extractValueOfObject, summAllPairs)(nums)
