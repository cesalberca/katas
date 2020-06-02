import { BottleNumberOne } from './bottle-number-one'
import { BottleNumberZero } from './bottle-number-zero'
import { BottleNumber } from './bottle-number'

export class BottleNumberFactory {
  static for(number: number): BottleNumber {
    switch (number) {
      case 0:
        return new BottleNumberZero()
      case 1:
        return new BottleNumberOne()
      default:
        return new BottleNumber(number)
    }
  }
}
