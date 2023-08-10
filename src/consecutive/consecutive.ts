export const consecutive = (listNum: number[], num1: number, num2: number): boolean =>
  listNum.indexOf(num1) - listNum.indexOf(num2) === 1 ||
  listNum.indexOf(num2) - listNum.indexOf(num1) === 1
