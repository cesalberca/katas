import { bestSumTab } from "./bestSumTab";

describe("bestSumTab", () => {
  it("should be an emmpty array whenever the target sum is zero", () => {
    expect(bestSumTab(0, [1, 2, 3])).toEqual([]);
  });

  it("should be null when the target sum is unreachable", () => {
    expect(bestSumTab(1, [2, 3])).toBe(null);
  });

  it("should be able to find the sum when there is only one combination possible", () => {
    expect(bestSumTab(7, [5, 3, 4, 7])).toEqual([7]);
  });

  it("should be able to find the best sum when there is multiple combination possible", () => {
    expect(bestSumTab(8, [2, 3, 5])).toEqual([3, 5]);
  });

  it("should pas the aceptance test", () => {
    expect(bestSumTab(100, [25, 2, 5])).toEqual([25, 25, 25, 25]);
  });
});
