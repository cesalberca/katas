import { getLengthOfMissingArray } from "./missingArray";

describe("getLengthOfMissingArray", () => {
  it("should be zero when the list is empty", () => {
    expect(getLengthOfMissingArray([])).toBe(0);
  });

  it("should be 2 for [[0],[0,0,0]]", () => {
    expect(getLengthOfMissingArray([[0], [0, 0, 0]])).toBe(2);
  });

  it("should be 3 for [[0], [0, 0], [0, 0, 0, 0]]", () => {
    expect(getLengthOfMissingArray([[0], [0, 0], [0, 0, 0, 0]])).toBe(3);
  });

  it("should handle when the array is not sorted", () => {
    expect(
      getLengthOfMissingArray([
        ["a", "a", "a"],
        ["a", "a"],
        ["a", "a", "a", "a"],
        ["a"],
        ["a", "a", "a", "a", "a", "a"],
      ])
    ).toBe(5);
  });

  it("should filter out zero", () => {
    expect(
      getLengthOfMissingArray([
        [1, 4],
        [],
        [0, 4, 2, 2],
        [2, 4, 4, 3, 4],
        [4, 4, 0, 0, 1, 0],
        [4, 3, 4],
        [0, 3, 4, 1, 3, 3, 0],
      ])
    ).toBe(0);
  });

  it("should sort length > 9", () => {
    expect(
      getLengthOfMissingArray([
        [0, 3, 4, 2],
        [2, 2, 4, 0, 1],
        [1, 1, 0, 4, 2, 0],
        [0, 3, 1, 2, 3, 1, 0],
        [3, 0, 3, 4, 1, 3, 3, 4],
        [2, 3, 2, 1, 4, 0, 4, 4, 0, 2],
      ])
    ).toBe(9);
  });

  it("should be zero when the list contain an empty list", () => {
    expect(
      getLengthOfMissingArray([
        [],
        [2, 2, 2, 2, 3, 2],
        [2],
        [4, 2, 1],
        [2, 3, 4, 1],
        [4, 3, 3, 1, 4],
      ])
    ).toBe(0);
  });
});
