import { narcissistic } from "./narcissistic";

describe("narcissistic", () => {
  it("should be true for one", () => {
    expect(narcissistic(1)).toBe(true);
  });

  it("should be true for 7", () => {
    expect(narcissistic(7)).toBe(true);
  });

  it("should be false for 10", () => {
    expect(narcissistic(10)).toBe(false);
  });

  it("should be true for 153", () => {
    expect(narcissistic(153)).toBe(true);
  });

  it("should pass the acceptance test ", () => {
    expect(narcissistic(1634)).toBe(true);
  });
});
