type Basket = Record<string, number>;

export const fruitCounter = (fruits: string[]): Basket => {
  return fruits.reduce<Basket>((basket, fruit) => {
    basket[fruit] ? basket[fruit]++ : (basket[fruit] = 1);
    return basket;
  }, {});
};
