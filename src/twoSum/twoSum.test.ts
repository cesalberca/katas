import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("should be 0,1 for [1,2,3] and 3 as target number", () => {
    expect(twoSum([1, 2, 3], 3)).toEqual([0, 1]);
  });

  it("should be 0,1 for [1,2,2] and 4 as target number", () => {
    expect(twoSum([1, 2, 2], 4)).toEqual([1, 2]);
  });
});
