import { solution } from "./stringsEndsWith";

describe("stringsEndsWith", () => {
  it("should be true if there is empty string, and end with empty string", () => {
    expect(solution("", "")).toBe(true);
  });

  it("should be false if there is  that does have end string", () => {
    expect(solution("a", "b")).toBe(false);
  });

  it("should be true when the string is longer than endString but container endString", () => {
    expect(solution("ab", "b")).toBe(true);
  });

  it("should be false when the string contains ending but endings is not at the end", () => {
    expect(solution("aba", "b")).toBe(false);
  });

  it("should be true when the string has ending of multiple letters", () => {
    expect(solution("ababc", "bc")).toBe(true);
  });
});
