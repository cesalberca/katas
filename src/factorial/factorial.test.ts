import { factorial } from "./factorial";

describe("factorial", () => {
  it("should be 1 for 1 and 0", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("should be 2 for 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should be 6 for 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should be 120 for 5", () => {
    expect(factorial(5)).toBe(120);
  });
});
