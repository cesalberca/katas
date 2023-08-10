import { fibTab } from "./fibTab";

describe("fibTab", () => {
  it("should 0 for 0", () => {
    expect(fibTab(0)).toBe(0);
  });

  it("should 1 for 1", () => {
    expect(fibTab(1)).toBe(1);
  });

  it("should be 21 for 8", () => {
    expect(fibTab(8)).toBe(21);
  });

  it("should pass the acceptance test", () => {
    expect(fibTab(50)).toBe(12586269025);
  });
});
