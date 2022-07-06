import { canConstruct } from "./canConstruct";

describe("canConstruct", () => {
  it("should be true for empty string", () => {
    expect(canConstruct("", ["a", "b"])).toBe(true);
  });

  it("should be false when no words can construct the target", () => {
    expect(canConstruct("a", ["b"])).toBe(false);
  });

  it("should be true when one words can construct the target", () => {
    expect(canConstruct("aa", ["a"])).toBe(true);
  });

  it("should pass the acceptance test", () => {
    expect(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(
      true
    );
    expect(
      canConstruct("eeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "eeee",
        "eeeee",
        "eeeeee",
        "eeeeeee",
        "eeeeeeee",
        "eeeeeeeee",
        "eeeeeeeeee",
      ])
    ).toBe(false);
  });
});
