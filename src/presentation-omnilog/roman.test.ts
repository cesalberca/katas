import { romanNumeral } from "./roman";

describe("romanNumeral", () => {
  it("should be 0 when empty string", () => {
    expect(romanNumeral("")).toBe(0);
  });

  it("should be 1 when I", () => {
    expect(romanNumeral("I")).toBe(1);
  });

  it("should be 5 when V", () => {
    expect(romanNumeral("V")).toBe(5);
  });

  it("should be 10 when X", () => {
    expect(romanNumeral("X")).toBe(10);
  });

  it("should be 2 when II", () => {
    expect(romanNumeral("II")).toBe(2);
  });

  it("should be 3 when III", () => {
    expect(romanNumeral("III")).toBe(3);
  });

  it("should be 4 when IV", () => {
    expect(romanNumeral("IV")).toBe(4);
  });

  it("should be 9 when IX", () => {
    expect(romanNumeral("IX")).toBe(9);
  });

  it("should be 1999 when MCMXCIX", () => {
    expect(romanNumeral("MCMXCIX")).toBe(1999);
  });
});
