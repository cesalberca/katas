export class ChangeCalculator {
  #moneyAmounts = new Map<number, number>([
    [500, 1],
    [200, 1],
    [100, 1],
    [50, 1],
    [20, 1],
    [10, 1],
    [5, 1],
    [2, 1],
    [1, 1]
  ])

  calculate(money: number, result: number[] = []): number[] {
    const moneyAmount = this.#moneyAmounts.get(money)
    const amounts = Array.from(this.#moneyAmounts)
    const [immediateBelowMoneyAmount, immediateBelowMoneyQuantity] = amounts.find(
      ([amount, quantity]) => amount <= money && quantity > 0
    ) ?? [0, 0]

    result.push(immediateBelowMoneyAmount)
    this.#moneyAmounts.set(immediateBelowMoneyAmount, immediateBelowMoneyQuantity - 1)

    if (moneyAmount !== undefined && moneyAmount !== 0) {
      return result
    }

    return this.calculate(money - immediateBelowMoneyAmount, result)
  }

  configureAmounts(newAmounts: Map<number, number>) {
    this.#moneyAmounts = newAmounts
  }
}
