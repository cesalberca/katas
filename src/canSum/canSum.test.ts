import { canSum } from "./canSum";

describe("canSum", () => {
  it("should be true for [2,3] and traget num = 7", () => {
    expect(canSum(7, [2, 3])).toBe(true);
  });

  it("should be false for [2,4] and traget num = 7", () => {
    expect(canSum(7, [2, 4])).toBe(false);
  });

  it("shoud pass the acceptance test ", () => {
    expect(canSum(7, [5, 3, 4, 7])).toBe(true);
    expect(canSum(300, [14, 7])).toBe(false);
  });
});
