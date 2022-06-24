export const longestConsec = (strarr: string[], k: number): string => {
  if (k < 1 || k > strarr.length) return "";
  return strarr
    .map((_, i, arr) => arr.slice(i, i + k).join(""))
    .reduce(
      (acc: string, curr: string) =>
        curr.length > acc.length ? (acc = curr) : acc,
      ""
    );
};
