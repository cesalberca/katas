import { isLeapYear } from "./leap-years";

describe("isLeapYear", () => {
  test("year divsible by 4 are leap years", () => {
    expect(isLeapYear(1984)).toBe(true);
  });

  test("year divisible by 100 should be false", () => {
    expect(isLeapYear(2500)).toBe(false);
  });

  test("year divisible by 400 should be true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("it should pass the acceptance test", () => {
    expect(isLeapYear(1234)).toBe(false);
    expect(isLeapYear(2010)).toBe(false);
    expect(isLeapYear(2013)).toBe(false);
  });
});
