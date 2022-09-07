import { allConstructTab } from "./allConstructTab";

describe("allConstrcutTab", () => {
  it("should be [[]] when the target is an empty string", () => {
    expect(allConstructTab("", [])).toEqual([[]]);
  });

  it("should be [] when the target is impossible", () => {
    expect(allConstructTab("bird", ["cat", "dog"])).toEqual([]);
  });

  it("should be be able to find all the way to create the target", () => {
    expect(
      allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual([
      ["abc", "def"],
      ["ab", "c", "def"],
      ["abcd", "ef"],
      ["ab", "cd", "ef"],
    ]);
  });
});
