import { allConstruct } from "././allConstruct";

describe("allConstruct", () => {
  it("should be [[]] for an empty string", () => {
    expect(allConstruct("", ["a"])).toEqual([[]]);
  });

  it("should be [] if there is no way to construct the word", () => {
    expect(allConstruct("b", ["a"])).toEqual([]);
  });

  it("should be be able the to construct the word with one word", () => {
    expect(allConstruct("a", ["a"])).toEqual([["a"]]);
  });

  it("should pass the acceptance test", () => {
    expect(
      allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual([
      ["ab", "cd", "ef"],
      ["ab", "c", "def"],
      ["abc", "def"],
      ["abcd", "ef"],
    ]);
  });
});
