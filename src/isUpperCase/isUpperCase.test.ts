import { isUpperCase } from "./isUpperCase";

describe("isUpperCase", () => {
  it("should be true if the letter is Upper case", () => {
    expect(isUpperCase("C")).toBe(true);
  });

  it("should be false if the letter is Lower case", () => {
    expect(isUpperCase("c")).toBe(false);
  });

  it("should pass the acceptance test", () => {
    expect(isUpperCase("hello I AM DONALD")).toBe(false);
  });
});
