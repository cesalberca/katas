const multiplyByItself = (number: number) => Math.pow(number, 2);

export const powerOfTwo = (numbers: number[]) => numbers.map(multiplyByItself);
