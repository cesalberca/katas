import { romanNumerals } from "./roman-numerlas";

describe("roman numerals", () => {
  it("should be 0 when we pass an empty string", () => {
    expect(romanNumerals("")).toBe(0);
  });

  it("should be 1 when we pass the roman number I", () => {
    expect(romanNumerals("I")).toBe(1);
  });

  it("should be 5 when we pass the roman number V", () => {
    expect(romanNumerals("V")).toBe(5);
  });

  it("should be 10 when we pass the roman number X", () => {
    expect(romanNumerals("X")).toBe(10);
  });

  it("should be 2 when we pass the roman number II", () => {
    expect(romanNumerals("II")).toBe(2);
  });

  it("should be 3 when we pass the roman number III", () => {
    expect(romanNumerals("III")).toBe(3);
  });

  it("should be 4 when we pass the roman number IV", () => {
    expect(romanNumerals("IV")).toBe(4);
  });

  it("should be 9 when we pass the roman number IX", () => {
    expect(romanNumerals("IX")).toBe(9);
  });

  it("should be 1666 when we pass the roman number MDCLXVI", () => {
    expect(romanNumerals("MDCLXVI")).toBe(1666);
  });
});
