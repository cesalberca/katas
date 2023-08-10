import { isHollow } from "./isHollow";

describe("isHollow", () => {
  it("should be false when there is no tree zero in the middle of the array", () => {
    expect(isHollow([100, 0, 0, 3])).toBe(false);
  });

  it("should be true when there is at least tree zero in the middle", () => {
    expect(isHollow([-1, 0, 0, 0, 3])).toBe(true);
  });

  it("should be false when there is a number higher or lesser than zero at the edge of the array", () => {
    expect(isHollow([-1, 0, 0, 0, 0])).toBe(false);
    expect(isHollow([0, 0, 0, 0, 5])).toBe(false);
  });

  it("should be false is the suite of zero is no in the middle of the array", () => {
    expect(isHollow([-1, 0, 0, 0, 5, 4, 6, 4, 7, 8, 3])).toBe(false);
  });

  it("should be true when there is only zeros", () => {
    expect(isHollow([0, 0, 0])).toBe(true);
  });
});
