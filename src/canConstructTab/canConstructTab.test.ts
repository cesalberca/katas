import { canConstructTab } from "./canConstructTab";

describe("canConstructTab", () => {
  it("should be true for an empty string", () => {
    expect(canConstructTab("", ["a", "b", "c"])).toBe(true);
  });

  it("should be false when it is impossible to construct the target", () => {
    expect(canConstructTab("cd", ["a", "b", "c"])).toBe(false);
  });

  it("should be true when it is possible to construct the target", () => {
    expect(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(
      true
    );
  });

  it("should pass the acceptance test", () => {
    expect(
      canConstructTab("enterapotentpot", ["enter", "apot", "pot", "ent"])
    ).toBe(true);
  });
});
