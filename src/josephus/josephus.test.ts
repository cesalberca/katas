import { josephus } from "./josephus";

describe("josephus", () => {
  it("should be [] empty array for empty array", () => {
    expect(josephus([], 3)).toEqual([]);
  });

  it("should be the same items when k is 1", () => {
    expect(josephus([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });

  it("should be [2,1] for k is 2 ", () => {
    expect(josephus([1, 2], 2)).toEqual([2, 1]);
  });

  it.only("should pass the acceptance test", () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([
      2, 4, 6, 8, 10, 3, 7, 1, 9, 5,
    ]);
  });

  it("should pass the acceptance test", () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([
      2, 4, 6, 8, 10, 3, 7, 1, 9, 5,
    ]);
  });

  expect(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)).toEqual([
    "e",
    "s",
    "W",
    "o",
    "C",
    "d",
    "r",
    "a",
  ]);
});
