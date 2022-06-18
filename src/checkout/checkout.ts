import { pipe } from "../composingSoftware/composingSoftware";

const divideBy = (number: number) => (numberToDivide: number) =>
  Math.floor(numberToDivide / number);

const divideBy3 = divideBy(3);
const divideBy2 = divideBy(2);

const numberOfProduct =
  (product: string) =>
  (products: string): number =>
    products.split("").filter((item) => item === product).length;

const calcNumberOfA = numberOfProduct("A");
const calcNumberOfB = numberOfProduct("B");

const sumAllProduct = (obj: any) => {
  const price = obj.product
    .split("")
    .reduce((acc: number, curr: string) => acc + obj[curr], 0);

  return { price, ...obj };
};

const discountForA = (obj: any) => {
  if (obj.numberOfA >= obj.eachDiscountA) {
    const newPrice = obj.price - obj.discountA * divideBy3(obj.numberOfA);
    return { ...obj, price: newPrice };
  }
  return obj;
};

const discountForB = (obj: any) => {
  if (obj.numberOfB >= obj.eachDiscountB)
    return obj.price - obj.discountB * divideBy2(obj.numberOfB);
  return obj.price;
};

const isUKnownItems = (items: string) =>
  !/[A|B|C|D|]/g.test(items) && !/^.{0}$/gm.test(items);

export const checkout = (product: string) => {
  if (isUKnownItems(product)) throw new Error("Unknown item");

  const store: Record<string, number | string> = {
    product,
    A: 50,
    B: 30,
    C: 20,
    D: 15,
    numberOfA: calcNumberOfA(product),
    numberOfB: calcNumberOfB(product),
    eachDiscountA: 3,
    eachDiscountB: 2,
    discountA: 20,
    discountB: 15,
  };

  const calcPrice = pipe(sumAllProduct, discountForA, discountForB);

  return calcPrice(store);
};
