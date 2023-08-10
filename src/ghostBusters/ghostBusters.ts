export const ghostBusters = (str: string): string =>
  str.includes(" ")
    ? str.split(" ").join("")
    : "You just wanted my autograph didn't you? for empty string";
