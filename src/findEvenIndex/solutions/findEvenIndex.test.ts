import { findEvenIndex } from "./findEvenIndex";

describe("findEvenIndex", () => {
  it("should handle empty list", () => {
    expect(findEvenIndex([])).toBe(-1);
  });

  it("should handle sucess case with only 3 numbers in the list", () => {
    expect(findEvenIndex([1, 1, 1])).toBe(1);
  });

  it("should handle the case when the right of the array is === 0", () => {
    expect(findEvenIndex([1, -1, 1])).toBe(0);
  });

  it("should handle complexe case when the sum of the right array === the left array", () => {
    expect(findEvenIndex([5, 1, 2, 3])).toBe(1);
  });

  it("should the case when there is multiple number in the right list that equals multiple number in the left of of the list", () => {
    expect(findEvenIndex([2, 5, 1, 2, 3, 2])).toBe(2);
  });

  it("should handle the case when the left array is 0 and the sum of the left array === 0", () => {
    expect(findEvenIndex([20, 10, -80, 10, 10, 15, 35])).toBe(0);
  });

  it("should pass the acceptance test", () => {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1);
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1);
    expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3);
  });
});
