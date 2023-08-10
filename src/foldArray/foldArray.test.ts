import { foldArray } from "./foldArray";

describe("foldArray", () => {
  it("should not fold the array so the array will be the same", () => {
    expect(foldArray([1], 0)).toEqual([1]);
  });

  it("should fold the array once when the length of the array is odd", () => {
    expect(foldArray([1, 2, 3], 1)).toEqual([4, 2]);
  });

  it("should fold the array once when the length of the arry is even", () => {
    expect(foldArray([-9, 9, -8, 8, 66, 23], 1)).toEqual([14, 75, 0]);
  });

  it("should be to fold an array multiple times", () => {
    expect(foldArray([1, 2, 3, 4, 5], 3)).toEqual([15]);
  });

  it("should be able to handle more runs than necessary", () => {
    expect(foldArray([1, 2, 3, 4, 5], 99)).toEqual([15]);
  });

  it("should be able to handle negative runs", () => {
    expect(foldArray([1, 2, 3, 4, 5], -1)).toEqual([1, 2, 3, 4, 5]);
  });
});
