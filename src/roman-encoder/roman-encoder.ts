const isNumberBetween = (number: number, start: number, end: number): boolean =>
  number > start && number < end;

export const solution = (number: number): string => {
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

  const romanNumberBuiler = (rangeNumber: number, number: number): string =>
    `${converter[rangeNumber]}${solution(number - rangeNumber)}`;

  if (number < 4)
    return Array.from({ length: number }, (_) => 1)
      .map((num) => converter[num])
      .join("");

  if (isNumberBetween(number, 5, 9)) return romanNumberBuiler(5, number);

  if (isNumberBetween(number, 10, 40)) return romanNumberBuiler(10, number);

  if (isNumberBetween(number, 40, 50)) return romanNumberBuiler(40, number);

  if (isNumberBetween(number, 50, 90)) return romanNumberBuiler(50, number);

  if (isNumberBetween(number, 90, 100)) return romanNumberBuiler(90, number);

  if (isNumberBetween(number, 100, 400)) return romanNumberBuiler(100, number);

  if (isNumberBetween(number, 400, 500)) return romanNumberBuiler(400, number);

  if (isNumberBetween(number, 500, 900)) return romanNumberBuiler(500, number);

  if (isNumberBetween(number, 900, 1000)) return romanNumberBuiler(900, number);

  if (number > 1000) return romanNumberBuiler(1000, number);

  return converter[number];
};
