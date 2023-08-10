interface Time {
  hours: number
  minutes: number
  seconds: number
}

export class G964 {
  private static pipe(...fns: any): any {
    return (x: any) => fns.reduce((v: any, f: any) => f(v), x)
  }

  private static MakeArrOfSeconds(str: string): number[] {
    return str.split(', ').map(time => {
      return G964.createTime(time)
    })
  }

  private static createTime(time: string) {
    const all = time.split('|').join('')

    const score = all.length === 6 ? all : `0${all}`

    const hours = Number(score.slice(0, 2)) * 3600

    const minutes = Number(score.slice(2, 4)) * 60

    const seconds = Number(score.slice(4, 6))

    return hours + seconds + minutes
  }

  private static calcDiff(arrNum: number[]): number {
    return Math.max(...arrNum) - Math.min(...arrNum)
  }

  private static calcHrMinAndSec(timeInSeconds: number): Time {
    const hours = timeInSeconds - 3600 > 0 ? Math.floor(timeInSeconds / 3600) : 0

    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60)

    const seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60)

    return {
      hours,
      minutes,
      seconds
    }
  }

  private static calcAverageInSeconds(arrNum: number[]): number {
    const arrLength = arrNum.length
    return arrNum.reduce((acc, curr) => acc + curr, 0) / arrLength
  }

  private static pickMedianeInSeconds(arrNum: number[]): number {
    const selectRank = (arrNum.length + 1) / 2 - 1

    if (!Number.isInteger(selectRank)) {
      const intSelectRank = selectRank + 0.5
      return (
        (arrNum.sort((a, b) => b - a)[intSelectRank] +
          arrNum.sort((a, b) => b - a)[intSelectRank - 1]) /
        2
      )
    }

    return arrNum.sort((a, b) => b - a)[selectRank]
  }

  private static addAZeroForSingleNumber(num: number): string {
    if (num < 10) return `0${num}`

    return `${num}`
  }

  private static displayScore(hours: number, minutes: number, seconds: number): string {
    return `${this.addAZeroForSingleNumber(hours)}|${this.addAZeroForSingleNumber(
      minutes
    )}|${this.addAZeroForSingleNumber(seconds)}`
  }

  private static convertSecondsToScore(sec: number): string {
    const { hours, minutes, seconds } = this.calcHrMinAndSec(sec)

    return this.displayScore(hours, minutes, seconds)
  }

  private static calcRange(str: string): string {
    if (!str.includes(',')) return '00|00|00'
    const rangeInSeconds = this.pipe(this.MakeArrOfSeconds, this.calcDiff)(str)

    return this.convertSecondsToScore(rangeInSeconds)
  }

  private static calcAverage(str: string): string {
    const averageInSeconds = this.pipe(this.MakeArrOfSeconds, this.calcAverageInSeconds)(str)
    return this.convertSecondsToScore(averageInSeconds)
  }

  private static calcMediane(str: string): string {
    const medianInSec = this.pipe(this.MakeArrOfSeconds, this.pickMedianeInSeconds)(str)
    return this.convertSecondsToScore(medianInSec)
  }

  public static stat(str: string) {
    if (str === '') return str
    return `Range: ${this.calcRange(str)} Average: ${this.calcAverage(
      str
    )} Median: ${this.calcMediane(str)}`
  }
}
