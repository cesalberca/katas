//////// currying

const curry =
  (f: any, arr: any[] = []) =>
  (...args: any) =>
    ((a: any) => (a.length === f.length ? f(...a) : curry(f, a)))([
      ...arr,
      ...args,
    ]);

export const add3 = curry(
  (a: number, b: number, c: number): number => a + b + c
);

export const add2 = (a: number) => (b: number) => a + b;

//////// function composition

export const compose =
  (...fns: any) =>
  (x: any) =>
    fns.reduceRight((y: any, f: any) => f(y), x);

export const pipe =
  (...fns: any) =>
  (x: any) =>
    fns.reduce((y: any, f: any) => f(y), x);

export const trace =
  (label: string) =>
  (value: any): any => {
    console.log(`${label} ${value}`);
    return value;
  };

export const inc = (x: number): number => x + 1;

export const double = (x: number): number => x * 2;

//////// higher order functions
export const reduce = (reducer: any, initial: any, arr: any[]) => {
  // shared stuff
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    // unique stuff in reducer call
    acc = reducer(acc, arr[i]);
    // more stuff
  }
  return acc;
};

export const add = (numArr: number[]) =>
  reduce((acc: any, curr: any) => acc + curr, 0, numArr);

export const filter = (fn: any, arr: any[]) =>
  reduce((acc: any, curr: any) => (fn(curr) ? acc.concat(curr) : acc), [], arr);

export const filterNumber = (arrEl: Array<number | string>) =>
  filter((el: number | string): boolean => typeof el === "number", arrEl);

export const censor = (words: string[]) =>
  filter((word: string) => word.length !== 4, words);

export const startWithS = (words: string[]) =>
  filter((word: string) => word.startsWith("s"), words);

//   polymorhic function
const hightPass =
  (cutOff: number) =>
  (n: number): boolean =>
    n >= cutOff;

export const gte3 = hightPass(3);

const addNumber = (num1: number) => (num2: number) => num1 + num2;

export const incBy1 = addNumber(1);

export const incBy20 = addNumber(20);
