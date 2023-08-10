import { primeNumber } from "./primeNumber";

describe("primeNumber", () => {
  it("should be [] for 1 ", () => {
    expect(primeNumber(1)).toEqual([]);
  });

  it("should be [2] for 2 ", () => {
    expect(primeNumber(2)).toEqual([2]);
  });

  it("should be [3] for 3 ", () => {
    expect(primeNumber(3)).toEqual([3]);
  });

  it("should be [2,2] for 4 ", () => {
    expect(primeNumber(4)).toEqual([2, 2]);
  });

  it("should be [2,3] for 6", () => {
    expect(primeNumber(6)).toEqual([2, 3]);
  });

  it("should be [2,2,2] for 8", () => {
    expect(primeNumber(8)).toEqual([2, 2, 2]);
  });

  it("should be [3,3] for 9", () => {
    expect(primeNumber(9)).toEqual([3, 3]);
  });

  it("should be [2, 2, 3, 3, 5, 7, 11, 13,] for 2 * 2 * 3 * 3 * 5 * 7 * 11 * 13", () => {
    expect(primeNumber(2 * 2 * 3 * 3 * 5 * 7 * 11 * 13)).toEqual([
      2, 2, 3, 3, 5, 7, 11, 13,
    ]);
  });
});
