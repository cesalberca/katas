import { howSum } from "./howSum";

describe("howSum", () => {
  it("should be [] for target 0 and [1,1]", () => {
    expect(howSum(0, [1, 1])).toEqual([]);
  });

  it("should be null for target 5 and [3,6]", () => {
    expect(howSum(5, [3, 6])).toEqual(null);
  });

  it("should be [3,3] for target 7 [5,3,4,7]", () => {
    expect(howSum(7, [5, 3, 4, 7])).toEqual([4, 3]);
  });

  it("should pass the acceptance test", () => {
    expect(howSum(300, [7, 14])).toEqual(null);
  });
});
