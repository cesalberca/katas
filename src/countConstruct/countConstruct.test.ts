import { countConstruct } from "./countConstruct";

describe("countConstruct", () => {
  it("should be 1 for an empty string", () => {
    expect(countConstruct("", ["a"])).toBe(1);
  });

  it("should be 0 if there is no way to construct the word", () => {
    expect(countConstruct("b", ["a"])).toBe(0);
  });

  it("should 1 if there is one way to construct the word", () => {
    expect(countConstruct("a", ["a"])).toBe(1);
  });

  it("should have 4 ways to construct the word", () => {
    expect(
      countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual(4);
  });

  it("should pass the acceptance test", () => {
    expect(
      countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])
    ).toEqual(2);
  });
});
