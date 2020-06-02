export class BottleNumber {
  constructor(protected readonly number: number) {}

  container() {
    return 'bottles'
  }

  quantity() {
    return this.number.toString()
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`
  }

  pronoun() {
    return 'one'
  }

  successor() {
    return this.number - 1
  }

  toString() {
    return `${this.quantity()} ${this.container()}`
  }
}
