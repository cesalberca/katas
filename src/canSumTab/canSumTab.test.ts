import { canSumTab } from "./canSumTab";

describe("canSumTab", () => {
  it("should be true whenever the targetSum is 0", () => {
    expect(canSumTab(0, [1, 2, 3])).toBe(true);
  });

  it("should be true for target 7 and number [5,3,4]", () => {
    expect(canSumTab(7, [5, 3, 4])).toBe(true);
  });

  it("should be false for 3 and number [2,2]", () => {
    expect(canSumTab(3, [2, 2])).toBe(false);
  });
});
