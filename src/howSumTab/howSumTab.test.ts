import { howSumTab } from "./howSumTab";

describe("howSumTab", () => {
  it("should be an empty array for when the target is zero", () => {
    expect(howSumTab(0, [1, 2, 3])).toEqual([]);
  });

  it("should be null when it is not possible to get list of numbers that can construct the sum", () => {
    expect(howSumTab(4, [5, 6])).toBe(null);
  });

  it("should be [4,3] for a target of 7 and a list of [5,3,4,7] ", () => {
    expect(howSumTab(7, [5, 3, 4, 7])).toEqual([4, 3]);
  });

  it("should pass the acceptance tests", () => {
    expect(howSumTab(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
    expect(howSumTab(300, [7, 14])).toEqual(null);
  });
});
