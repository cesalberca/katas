import { solution } from "./roman";

describe("roman numeral encoder", () => {
  it("should be 1 for II", () => {
    expect(solution("I")).toBe(1);
  });

  it("should be 2 for II", () => {
    expect(solution("II")).toBe(2);
  });

  it("should be 3 for III", () => {
    expect(solution("III")).toBe(3);
  });

  it("should be 4 for IV", () => {
    expect(solution("IV")).toBe(4);
  });

  it("should be 5 for V", () => {
    expect(solution("V")).toBe(5);
  });
  it("should be IX for 9", () => {
    expect(solution("IX")).toBe(9);
  });

  it("should be 10 for X", () => {
    expect(solution("X")).toBe(10);
  });
  it("should be 14 for XIV", () => {
    expect(solution("XIV")).toBe(14);
  });

  it("should be 50 for L", () => {
    expect(solution("L")).toBe(50);
  });

  it("should be 40 for XL", () => {
    expect(solution("XL")).toBe(40);
  });

  it("should be 100 for C", () => {
    expect(solution("C")).toBe(100);
  });

  it("should be 95 for XCV", () => {
    expect(solution("XCV")).toBe(95);
  });

  it("should be 500 for D", () => {
    expect(solution("D")).toBe(500);
  });

  it("should be 499 for CDXCIX", () => {
    expect(solution("CDXCIX")).toBe(499);
  });

  it("should be M for 1000", () => {
    expect(solution("M")).toBe(1000);
  });

  it("should be 900 for CM", () => {
    expect(solution("CM")).toBe(900);
  });

  it("should pass the acceptance test", () => {
    expect(solution("MMVIII")).toBe(2008);
    expect(solution("MDCLXVI")).toBe(1666);
  });
});
