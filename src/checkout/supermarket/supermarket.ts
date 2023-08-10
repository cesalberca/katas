import { pipe } from "../../composingSoftware/composingSoftware";

const PRODUCT_PRICES: Record<string, number> = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

type Supermarket = {
  product: string;
  cost: number;
  numberOfA: number;
  numberOfB: number;
};

const incNumberOfB = (supermarket: Supermarket) =>
  supermarket.product === "B"
    ? { ...supermarket, numberOfB: supermarket.numberOfB + 1 }
    : supermarket;

const incNumberOfA = (supermarket: Supermarket) =>
  supermarket.product === "A"
    ? { ...supermarket, numberOfA: supermarket.numberOfA + 1 }
    : supermarket;

const calcCost = (supermarket: Supermarket) => ({
  ...supermarket,
  cost: supermarket.cost + PRODUCT_PRICES[supermarket.product],
});

const applyDiscountA = (supermarket: Supermarket) =>
  supermarket.numberOfA === 3
    ? {
        ...supermarket,
        numberOfA: supermarket.numberOfA - 3,
        cost: supermarket.cost - 20,
      }
    : supermarket;

const applyDiscountB = (supermarket: Supermarket) =>
  supermarket.numberOfB === 2
    ? {
        ...supermarket,
        numberOfB: supermarket.numberOfB - 2,
        cost: supermarket.cost - 15,
      }
    : supermarket;

const checkout = pipe(
  incNumberOfB,
  incNumberOfA,
  calcCost,
  applyDiscountA,
  applyDiscountB
);

export const supermarket = (products: string) => {
  return products.split("").reduce(
    (acc, product) => {
      if (!["A", "B", "C", "D"].includes(product)) {
        throw new Error("Unknown item");
      }
      const { cost, numberOfA, numberOfB } = checkout({ ...acc, product });

      return { cost, numberOfA, numberOfB };
    },
    { cost: 0, numberOfA: 0, numberOfB: 0 }
  ).cost;
};
