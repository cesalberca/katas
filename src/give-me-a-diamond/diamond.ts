export const diamond = (size: number) => {
  if (size < 0 || size % 2 === 0) return null;

  let diamond = "";

  let i = 1;
  let spaceSize = Math.trunc(size / 2);
  let diamondLineSize = 1;

  while (size >= i) {
    if (i === Math.trunc(size / 2) + 1) {
      diamond += `${"*".repeat(Math.trunc(size))}\n`;
      spaceSize += 1;
      diamondLineSize -= 2;
    } else {
      diamond += `${" ".repeat(spaceSize)}${"*".repeat(diamondLineSize)}\n`;
      if (i < Math.trunc(size / 2) + 1) {
        spaceSize -= 1;
        diamondLineSize += 2;
      } else {
        spaceSize += 1;
        diamondLineSize -= 2;
      }
    }
    i++;
  }

  return diamond;
};
