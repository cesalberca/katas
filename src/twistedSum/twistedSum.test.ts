import { twistedSum } from "./twistedSum";

describe("twistedSum", () => {
  it("should be 0 fro 0", () => {
    expect(twistedSum(0)).toBe(0);
  });

  it("should be 1 for 1", () => {
    expect(twistedSum(1)).toBe(1);
  });

  it("should handle number with 1 digit", () => {
    expect(twistedSum(4)).toBe(10);
  });

  it("should handle number with more than one digit", () => {
    expect(twistedSum(10)).toBe(46);
  });

  it("should pass the acceptance test", () => {
    expect(twistedSum(12)).toBe(51);
  });
});
