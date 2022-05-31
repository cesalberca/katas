import { last } from "./sortByLastChar";

describe("sort by last char", () => {
  it("sort by the last char when there is one char", () => {
    expect(last("a")).toEqual(["a"]);
  });

  it("should work for two chars already sorted by last char", () => {
    expect(last("b a")).toEqual(["a", "b"]);
  });

  it("should sort when the one letter chars by last char ", () => {
    expect(last("a b")).toEqual(["a", "b"]);
  });

  it("should be able to sort by the last letter when there is words with multiple letters", () => {
    expect(last("ab ba")).toEqual(["ba", "ab"]);
  });

  it("should be able to handle when two wors have the same last letter", () => {
    expect(last("ab bb ba")).toEqual(["ba", "ab", "bb"]);
  });
});
