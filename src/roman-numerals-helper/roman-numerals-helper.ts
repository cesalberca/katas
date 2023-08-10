export class RomanNumerals {
  public static fromRoman(roman: string): number {
    const converter: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    return roman.split("").reduce((number, romanNum, i, romanNums) => {
      if (romanNum === "V" && romanNums[i - 1] === "I")
        return number + (converter[romanNum] - 2);
      if (romanNum === "X" && romanNums[i - 1] === "I")
        return number + (converter[romanNum] - 2);
      if (romanNum === "L" && romanNums[i - 1] === "X")
        return number + (converter[romanNum] - 20);
      if (romanNum === "C" && romanNums[i - 1] === "X")
        return number + (converter[romanNum] - 20);
      if (romanNum === "D" && romanNums[i - 1] === "C")
        return number + (converter[romanNum] - 200);
      if (romanNum === "M" && romanNums[i - 1] === "C")
        return number + (converter[romanNum] - 200);
      return number + converter[romanNum];
    }, 0);
  }

  public static toRoman(number: number): string {
    const converter: Record<number, string> = {
      1: "I",
      5: "V",
      4: "IV",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };

    const isNumberBetween = (
      number: number,
      start: number,
      end: number
    ): boolean => number > start && number < end;

    const romanNumberBuiler = (rangeNumber: number, number: number): string =>
      `${converter[rangeNumber]}${this.toRoman(number - rangeNumber)}`;

    if (number < 4)
      return Array.from({ length: number }, (_) => 1)
        .map((num) => converter[num])
        .join("");

    if (isNumberBetween(number, 5, 9)) return romanNumberBuiler(5, number);

    if (isNumberBetween(number, 10, 40)) return romanNumberBuiler(10, number);

    if (isNumberBetween(number, 40, 50)) return romanNumberBuiler(40, number);

    if (isNumberBetween(number, 50, 90)) return romanNumberBuiler(50, number);

    if (isNumberBetween(number, 90, 100)) return romanNumberBuiler(90, number);

    if (isNumberBetween(number, 100, 400))
      return romanNumberBuiler(100, number);

    if (isNumberBetween(number, 400, 500))
      return romanNumberBuiler(400, number);

    if (isNumberBetween(number, 500, 900))
      return romanNumberBuiler(500, number);

    if (isNumberBetween(number, 900, 1000))
      return romanNumberBuiler(900, number);

    if (number > 1000) return romanNumberBuiler(1000, number);

    return converter[number];
  }
}
