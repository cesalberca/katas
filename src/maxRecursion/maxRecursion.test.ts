import { max } from "./maxRecursion";

describe("max", () => {
  it("should be -Infinity when list is empty", () => {
    expect(max([])).toBe(-Infinity);
  });

  it("should be 5 when there is only 5 in the list", () => {
    expect(max([5])).toBe(5);
  });

  it("should be 3 when there is 1 and 3 in the list", () => {
    expect(max([1, 3])).toBe(3);
  });

  it("should be 3 when there is 3 and 1 in the list", () => {
    expect(max([3, 1])).toBe(3);
  });

  it("should pass the acceptance test", () => {
    expect(max([99, 2, 100, 4, 5])).toBe(100);
  });
});
