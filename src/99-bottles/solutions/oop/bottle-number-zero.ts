import { BottleNumber } from './bottle-number'

export class BottleNumberZero extends BottleNumber {
  constructor() {
    super(0)
  }

  quantity(): string {
    return 'no more'
  }

  action(): string {
    return 'Go to the store and buy some more'
  }

  successor(): number {
    return 99
  }
}
