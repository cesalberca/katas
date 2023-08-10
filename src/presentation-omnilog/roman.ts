const romanToArabic: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  M: 1000,
};

const convertRomanToArabic = (
  acc: number,
  curr: string,
  i: number,
  str: string[]
) =>
  romanToArabic[curr] < romanToArabic[str[i + 1]]
    ? acc - romanToArabic[curr]
    : acc + romanToArabic[curr];

export const romanNumeral = (str: string) => {
  str; //?
  return str.split("").reduce(convertRomanToArabic, 0);
};
