import { bestSum } from "./bestSum";

describe("bestSum", () => {
  it("should be [] for tareget 0", () => {
    expect(bestSum(0, [1, 1])).toEqual([]);
  });

  it("should be null for target 3 and 2,2", () => {
    expect(bestSum(3, [2, 2])).toEqual(null);
  });

  it("should be [7] for target 7,[5,3,4,7]", () => {
    expect(bestSum(7, [5, 3, 4, 7])).toEqual([7]);
  });

  it("should pass the acceptance test", () => {
    expect(bestSum(100, [5, 3, 5, 25])).toEqual([25, 25, 25, 25]);
  });
});
