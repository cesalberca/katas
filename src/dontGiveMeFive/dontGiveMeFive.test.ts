import { dontGiveMeFive } from "./dontGiveMeFive";

describe("dontGiveMeFive", () => {
  it("should be 2 when the start number is 1 and end number is 2", () => {
    expect(dontGiveMeFive(1, 2)).toBe(2);
  });

  it("should be 3 when the start number is 1 and the end number is 3", () => {
    expect(dontGiveMeFive(1, 3)).toBe(3);
  });

  it("should be 3 when the start number is 0 and the end number is 2", () => {
    expect(dontGiveMeFive(0, 2)).toBe(3);
  });

  it("should handle negative numbers", () => {
    expect(dontGiveMeFive(-1, 2)).toBe(4);
  });

  it("should handle when there is a five", () => {
    expect(dontGiveMeFive(1, 9)).toBe(8);
  });

  it("should handle when there is number that contains five ", () => {
    expect(dontGiveMeFive(4, 17)).toBe(12);
  });

  it("should pass the acceptance test", () => {
    expect(dontGiveMeFive(-2, 10)).toBe(12);
    expect(dontGiveMeFive(-14, -6)).toBe(9);
    expect(dontGiveMeFive(-35, 5)).toBe(36);
    expect(dontGiveMeFive(-2, 10)).toBe(12);
  });
});
