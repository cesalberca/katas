type Basket = Record<string, number>

export function fruitCounter(fruits: string[]): Basket {
  return fruits.reduce<Basket>((basket, fruit) => {
    if (basket[fruit] === undefined) {
      basket[fruit] = 0
    }

    basket[fruit]++
    return basket
  }, {})
}
