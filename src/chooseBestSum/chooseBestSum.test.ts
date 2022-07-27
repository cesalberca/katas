import { chooseBestSum } from "./chooseBestSum";

describe("chooseBestSum", () => {
  it("should be num when number of town is less than the number of town to visit", () => {
    expect(chooseBestSum(163, 3, [50])).toBe(null);
  });

  it("should give the sum of number when the list if the same length as the number of town", () => {
    expect(chooseBestSum(163, 3, [50, 50, 35])).toBe(135);
  });

  it("should give the best sum of the list of distances ", () => {
    expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
  });

  it("should be null when the target is 0", () => {
    expect(chooseBestSum(0, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(null);
  });
});
