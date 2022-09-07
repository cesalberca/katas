const maxCodeLength = 4;

const notADigit = "";

const encoding: Record<string, string> = {
  b: "1",
  f: "1",
  p: "1",
  v: "1",
  c: "2",
  g: "2",
  j: "2",
  k: "2",
  q: "2",
  s: "2",
  x: "2",
  z: "2",
  d: "3",
  t: "3",
  l: "4",
  m: "5",
  n: "5",
  r: "6",
};

const zerosPad = (word: string): string => word.padEnd(maxCodeLength, "0");

const head = (word: string): string => word[0].toUpperCase();

export const encodedDigit = (letter: string) =>
  encoding[letter] ? encoding[letter] : notADigit;

const isComplete = (tail: string): boolean => tail.length === maxCodeLength - 1;

const isVowel = (letter: string): boolean =>
  ["a", "e", "i", "o", "u"].includes(letter);

const isDuplicateEncoding = (
  previousLetterEncoded: string,
  previousLetter: string,
  letter: string
) => encodedDigit(letter) === previousLetterEncoded && !isVowel(previousLetter);

const isSameThanFirstLetter = (
  firstLetter: string,
  encoded: string,
  currentLetter: string
): boolean =>
  encoded === "" && encodedDigit(firstLetter) === encodedDigit(currentLetter);

const encodeDigits = (word: string): string =>
  word
    .slice(1)
    .split("")
    .reduce(
      (encoded: string, letter: string, i: number, tail: string[]) =>
        isComplete(encoded) ||
        isDuplicateEncoding(encoded[encoded.length - 1], tail[i - 1], letter) ||
        isSameThanFirstLetter(word[0], encoded, letter)
          ? encoded
          : `${encoded}${encodedDigit(letter)}`,

      ""
    );

const encode = (word: string): string =>
  zerosPad(`${head(word)}${encodeDigits(word.toLowerCase())}`);

export const soundex = (words: string): string =>
  words
    .split(" ")
    .map((word) => encode(word))
    .join(" ");
