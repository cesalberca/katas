import { isNarcissistic } from "./isNarcistic";

describe("isNarcistic", () => {
  it("should be a narcissistic number when it's 0 ", () => {
    expect(isNarcissistic(0)).toBe(true);
  });

  it("should not be be a narcissistic number when it's 2 ", () => {
    expect(isNarcissistic(2)).toBe(true);
  });

  it("should be a narcissistic number when it's 1 ", () => {
    expect(isNarcissistic(1)).toBe(true);
  });

  it("should be a narcissistic number when it's 153 ", () => {
    expect(isNarcissistic(153)).toBe(true);
  });

  it("should be false for no narcissistic ", () => {
    expect(isNarcissistic(453)).toBe(false);
  });
});
