import { G964 } from "./wich-are-in";

describe("which are in", () => {
  it("should be an empty list", () => {
    expect(G964.inArray(["a"], ["b"])).toEqual([]);
  });

  it('should be ["a"]', () => {
    expect(G964.inArray(["a"], ["a"])).toEqual(["a"]);
  });

  it("should work when the wors of a2 have multiple letters", () => {
    expect(G964.inArray(["a", "b"], ["aa", "bbb"])).toEqual(["a", "b"]);
  });

  it("should sort the result", () => {
    expect(G964.inArray(["b", "a"], ["aa", "bbb"])).toEqual(["a", "b"]);
  });

  it("should pass the acceptance test", () => {
    expect(
      G964.inArray(
        ["arp", "live", "strong"],
        ["lively", "alive", "harp", "sharp", "armstrong"]
      )
    ).toEqual(["arp", "live", "strong"]);
  });
});
