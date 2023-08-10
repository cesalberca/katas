const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((v: any, f: any) => f(v), x)

const splitWhenTheCharChange = (str: string) => str.match(/(.)\1*/g)

const formatIntoTheDesiredOutput = (arr: string[]) =>
  arr?.map((char: string) => [char.length, char.slice(0, 1)])

export const runLengthEncoding = function (str: string) {
  if (str.length < 1) return []
  return pipe(splitWhenTheCharChange, formatIntoTheDesiredOutput)(str)
}
