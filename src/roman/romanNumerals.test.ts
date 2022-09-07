import { romanNumerals } from "./romanNumerals";

describe("romanNumerals", () => {
  it("should be 0 for empty string ", () => {
    expect(romanNumerals("")).toBe(0);
  });

  it("should be 1 for I", () => {
    expect(romanNumerals("I")).toBe(1);
  });

  it("should be 2 for II", () => {
    expect(romanNumerals("II")).toBe(2);
  });

  it("should be 3 for III", () => {
    expect(romanNumerals("III")).toBe(3);
  });

  it("should be 5 for V", () => {
    expect(romanNumerals("V")).toBe(5);
  });

  it("should be 10 for X", () => {
    expect(romanNumerals("X")).toBe(10);
  });

  it("should be 4 for IV", () => {
    expect(romanNumerals("IV")).toBe(4);
  });

  it("should be 4 for IX", () => {
    expect(romanNumerals("IX")).toBe(9);
  });

  it("should be 22 for XXI", () => {
    expect(romanNumerals("XXII")).toBe(22);
  });

  it("should be 19 for XIX", () => {
    expect(romanNumerals("XIX")).toBe(19);
  });

  it("should be 50 for L", () => {
    expect(romanNumerals("L")).toBe(50);
  });

  it("should be 40 for XL", () => {
    expect(romanNumerals("XL")).toBe(40);
  });

  it("should be 100 for C", () => {
    expect(romanNumerals("C")).toBe(100);
  });

  it("should be 1000 for M", () => {
    expect(romanNumerals("M")).toBe(1000);
  });

  it("should be 1995 for MCMXCV", () => {
    expect(romanNumerals("MCMXCV")).toBe(1995);
  });
});
