type Basket = Record<string, number>

export function fruitCounter(fruits: string[]): Basket {
  const fruitBasket: Basket = {}
  fruits.forEach(fruit => {
    if (fruitBasket[fruit] === undefined) {
      fruitBasket[fruit] = 0
    }

    fruitBasket[fruit]++
  })
  return fruitBasket
}
