import { upArray } from "./upArray";

describe("upArray", () => {
  it("should be null given an empty array", () => {
    expect(upArray([])).toEqual(null);
  });

  it("should be null given [-1]", () => {
    expect(upArray([-1])).toEqual(null);
  });

  it("should be null given an array that contains an integer with 2 digits", () => {
    expect(upArray([1, 2, 34])).toEqual(null);
  });

  it("should be null given an array who contains negative numbers", () => {
    expect(upArray([1, -2, 6])).toEqual(null);
  });

  it("should be [2] given [1]", () => {
    expect(upArray([1])).toEqual([2]);
  });

  it("should be [1,0] for 9", () => {
    expect(upArray([9])).toEqual([1, 0]);
  });

  it("should increment only the last digit of the array", () => {
    expect(upArray([1, 0])).toEqual([1, 1]);
  });

  it("should pass to the next ten digit", () => {
    expect(upArray([1, 9, 9])).toEqual([2, 0, 0]);
    expect(upArray([1, 9])).toEqual([2, 0]);
    expect(upArray([2, 9])).toEqual([3, 0]);
  });

  it("should pass to the next hundreed digit", () => {
    expect(upArray([9, 9])).toEqual([1, 0, 0]);
  });

  it("should [2,9,4] given [2,9,3]", () => {
    expect(upArray([2, 9, 3])).toEqual([2, 9, 4]);
  });

  it("should pass the acceptances tests", () => {
    expect(upArray([4, 3, 2, 5])).toEqual([4, 3, 2, 6]);
    expect(upArray([2, 3, 9])).toEqual([2, 4, 0]);
  });

  it("should pass the final test", () => {
    expect(upArray([1, 7, 9, 9])).toEqual([1, 8, 0, 0]);
  });
});
