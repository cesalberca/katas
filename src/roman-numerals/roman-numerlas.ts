const romanToArabian: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanNumerals = (romanNumber: string) =>
  romanNumber
    .split("")
    .reduce(
      (acc, curr, i) =>
        romanToArabian[curr] < romanToArabian[romanNumber[i + 1]]
          ? acc - romanToArabian[curr]
          : acc + romanToArabian[curr],
      0
    );
