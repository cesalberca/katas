const sumStr = (str: string): number =>
  str.split("").reduce((acc, curr) => acc + +curr, 0);

export const orderWeight = (strng: string): string =>
  strng
    .split(" ")
    .sort((a, b) => {
      const weightA = sumStr(a);
      const weightB = sumStr(b);
      if (weightA !== weightB) return weightA - weightB;
      if (a < b) return -1;
      return 0;
    })
    .join(" ");
