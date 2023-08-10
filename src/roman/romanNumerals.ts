const conversion: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  M: 1000,
};

export const romanNumerals = (roman: string) =>
  roman
    .split("")
    .reduce(
      (acc, curr, i) =>
        conversion[curr] < conversion[roman[i + 1]]
          ? acc - conversion[curr]
          : acc + conversion[curr],
      0
    );
