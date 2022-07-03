import { gridtraveler } from "./gridtraveler";

describe("gridtraveler", () => {
  it("should be 1 for 1*1", () => {
    expect(gridtraveler(1, 1)).toBe(1);
  });

  it("should be 0 for 0*0", () => {
    expect(gridtraveler(0, 0)).toBe(0);
  });

  it("should be 1 for 8*1", () => {
    expect(gridtraveler(8, 1)).toBe(1);
  });

  it("should be 1 for 1*8", () => {
    expect(gridtraveler(1, 8)).toBe(1);
  });

  it("should be 3 for 2*3", () => {
    expect(gridtraveler(2, 3)).toBe(3);
  });

  it("should be 9 for 3*3", () => {
    expect(gridtraveler(3, 3)).toBe(6);
  });

  it("should be 2333606220 for 18*18", () => {
    expect(gridtraveler(3, 4)).toBe(10);
  });
});
