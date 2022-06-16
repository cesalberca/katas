const cutTheFirstNumber = (number: number, [first, last]: number[]): number =>
  +number.toString().slice(first, last);

const cutTheLastPart = (number: number, lastPart: number): number =>
  +number.toString().slice(lastPart);

const isZero = (number: number, part: number): boolean =>
  +number.toString().slice(part) === 0;

const spaceOrEmptyString = (number: number): string =>
  isZero(number, 1) ? "" : "-";

const numberOfLength2AndSupTo13 =
  (words: Record<number, string>) =>
  (num: number): string => {
    if (num > 19 && num < 60)
      return `${
        words[Number(`${cutTheFirstNumber(num, [0, 1])}0`)]
      }${spaceOrEmptyString(num)}${
        isZero(num, 1) ? "" : words[cutTheLastPart(num, 1)]
      }`;

    if (num > 59 && num < 100)
      return `${words[cutTheFirstNumber(num, [0, 1])]}${
        cutTheFirstNumber(num, [0, 1]) === 8 ? "y" : "ty"
      }${spaceOrEmptyString(num)}${
        isZero(num, 1) ? "" : words[cutTheLastPart(num, 1)]
      }`;

    return `${words[+num.toString().slice(1)]}${
      +num.toString().slice(1) === 8 ? "een" : "teen"
    }`;
  };

const words: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
};

export const numbersInWords = (num: number): string => {
  if (num > 13 && num < 100) return numberOfLength2AndSupTo13(words)(num);

  if (num > 99 && num < 1000)
    return displayString({
      num,
      firstNumCut: [0, 1],
      numWord: "hundred",
      zeroCut: 1,
      lastNumCut: 1,
    });

  if (num > 999 && num < 10000)
    return displayString({
      num,
      firstNumCut: [0, 1],
      numWord: "thousand",
      zeroCut: 1,
      lastNumCut: 1,
    });

  if (num > 9999 && num < 100000)
    return displayString({
      num,
      firstNumCut: [0, 2],
      numWord: "thousand",
      zeroCut: 2,
      lastNumCut: 2,
    });

  if (num > 99999)
    return displayString({
      num,
      firstNumCut: [0, 3],
      numWord: "thousand",
      zeroCut: 3,
      lastNumCut: 3,
    });

  return words[num];
};

interface Params {
  num: number;
  firstNumCut: number[];
  numWord: string;
  zeroCut: number;
  lastNumCut: number;
}

function displayString(params: Params): string {
  return `${numbersInWords(
    cutTheFirstNumber(params.num, params.firstNumCut)
  )} ${params.numWord} ${
    isZero(params.num, params.zeroCut)
      ? ""
      : numbersInWords(cutTheLastPart(params.num, params.lastNumCut))
  }`.trim();
}
