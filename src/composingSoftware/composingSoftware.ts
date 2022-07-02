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

// Monads

const composeM =
  (flatMap: string) =>
  (...ms: any[]) =>
    ms.reduce((f, g) => (x: any) => g(x)[flatMap](f));

const composePromises = composeM("then");

const getUserbyId = (id: number) =>
  id === 3 ? Promise.resolve({ name: "Kurt", role: "Author" }) : undefined;

const hasPermisson = ({ role }: { name: string; role: string }) =>
  Promise.resolve(role === "Author");

export const authUser = composePromises(hasPermisson, getUserbyId);

// factory function ofr mixin composition

const withConstructor = (constuctor: any) => (o: any) => ({
  __proto__: {
    constuctor,
  },
  ...o,
});

const withFlying = (o: any) => {
  let isFlying = false;

  return {
    ...o,
    fly() {
      isFlying = true;
      return this;
    },
    land() {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying,
  };
};

const withDriving = (o: any) => {
  let speed = 0;

  return {
    ...o,
    accelarate(km: number) {
      speed = speed + km;
      return this;
    },

    break(km: number) {
      speed = speed - km < 0 ? 0 : speed - km;
      return this;
    },
    getSpeed: () => speed,
  };
};

const withBattery =
  ({ capacity }: { capacity: string }) =>
  (o: any) => {
    let percentCharge = 100;
    return {
      ...o,
      getCapacity() {
        return capacity;
      },
      draw(percent: number) {
        percentCharge = percentCharge - percent;
        return this;
      },
      getCharge: () => percentCharge,
    };
  };

const createDrone = ({ capacity = "3000mAh" }) =>
  pipe(withFlying, withBattery({ capacity }), withConstructor(createDrone))({});

export const myDrone = createDrone({ capacity: "5500mAh" });

export const createRobot = ({ capacity = "600mAh" }) =>
  pipe(
    withBattery({ capacity }),
    withDriving,
    withConstructor(createRobot)
  )({});

// Lens

export const view = (lens: any, store: any) => lens.view(store);
export const set = (lens: any, value: any, store: any) =>
  lens.set(value, store);

export const over = (lens: any, fn: any, store: any) => lens.over(fn, store);

export const lensProp = (prop: any) => ({
  view: (store: any) => store[prop],
  set: (value: any, store: any) => ({
    ...store,
    [prop]: value,
  }),
  over: (fn: any, store: any) => ({
    ...store,
    [prop]: fn(store[prop]),
  }),
});

// Transducers

interface Friends {
  id: number;
  name: string;
  nearMe: boolean;
}

const isNearMe = (arr: Friends[]): Friends[] =>
  arr.filter(({ nearMe }: Friends) => nearMe);

const getName = (arr: Friends[]): string[] => arr.map(({ name }) => name);

export const getFriendsNearMe = pipe(isNearMe, getName);

export const toArray = (tranducer: any, arr: any) => tranducer(arr);

const trampoline =
  (fn: any) =>
  (...args: any) => {
    let result: any = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };

const sumBelow = trampoline(
  (number: number, sum = 0): (() => number) | number =>
    number === 0 ? sum : () => sumBelow(number - 1, sum + number)
);
