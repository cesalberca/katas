export class Kata {
  private static pipe =
    (...fns: any[]) =>
    (x: any) =>
      fns.reduce((v: any, f: any) => f(v), x)

  private static findMostDigits = (array: number[]): number =>
    array.reduce((acc, curr) =>
      acc.toString().length < curr.toString().length ? (acc = curr) : acc
    )

  public static findLongest(array: number[]): number {
    return this.pipe(this.findMostDigits)(array)
  }
}
