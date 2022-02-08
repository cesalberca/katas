import { BottleNumber } from './bottle-number'

export class BottleNumberOne extends BottleNumber {
  constructor() {
    super(1)
  }

  container(): string {
    return 'bottle'
  }

  pronoun(): string {
    return 'it'
  }
}
