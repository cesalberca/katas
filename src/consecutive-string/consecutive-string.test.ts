import { longestConsec } from "./consecutive-string";

describe("longestConsec", () => {
  it('should be a for ["a","b"] and k = 1', () => {
    expect(longestConsec(["a", "b"], 1)).toBe("a");
  });

  it('should be c for ["c","b"] and k = 1', () => {
    expect(longestConsec(["c", "b"], 1)).toBe("c");
  });

  it('should be bm for ["c","bm"] and k = 1', () => {
    expect(longestConsec(["c", "bm"], 1)).toBe("bm");
  });

  it('should be ab for ["a","b","c","d"] and k = 2', () => {
    expect(longestConsec(["a", "b", "c", "d"], 2)).toBe("ab");
  });

  it("should be ixoyx3452zzzzzzzzzzzz for ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'] and k=3", () => {
    expect(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
    ).toBe("ixoyx3452zzzzzzzzzzzz");
  });

  it("should pass the acceptance test", () => {
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
    ).toBe("abigailtheta");
  });

  it("should handle the k=0 case", () => {
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 0)
    ).toBe("");
  });

  it("should handle the case when k is negative", () => {
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -5)
    ).toBe("");
  });

  it("should handle the case when k is superior to the array of string", () => {
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 15)
    ).toBe("");
  });
});
