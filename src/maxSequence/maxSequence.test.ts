import { maxSequence } from "./maxSequence";

describe("maxSequence", () => {
  it("should be 0 for an empty array", () => {
    expect(maxSequence([])).toBe(0);
  });

  it("should be the sum of all positive numbers", () => {
    expect(maxSequence([1, 2, 3])).toBe(6);
  });

  it("should handle when there is negative numbers and positive numbers", () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it("should be zero when there is only negative number", () => {
    expect(maxSequence([-2, -6])).toBe(0);
  });
});
