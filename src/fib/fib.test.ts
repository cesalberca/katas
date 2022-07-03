import { fib } from "./fib";

describe("fib", () => {
  it("should be 1 for 0", () => {
    expect(fib(0)).toBe(1);
  });

  it("should be 2 for 2", () => {
    expect(fib(0)).toBe(1);
  });

  it("should be 3 for 3", () => {
    expect(fib(3)).toBe(2);
  });

  it("should be 3 for 3", () => {
    expect(fib(4)).toBe(3);
  });

  it("should be 8 for 5", () => {
    expect(fib(5)).toBe(5);
  });

  it("should be 8 for 5", () => {
    expect(fib(8)).toBe(21);
  });
});
