export const count = (str: string) =>
  str
    .split("")
    .reduce(
      (result: Record<string, number>, currStr) =>
        result[currStr]
          ? { ...result, [currStr]: result[currStr] + 1 }
          : { ...result, [currStr]: 1 },
      {}
    );
