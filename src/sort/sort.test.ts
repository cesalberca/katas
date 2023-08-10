import { sort } from "./sort";

describe("sort", () => {
  it("should be an empty list for an empty list", () => {
    expect(sort([])).toEqual([]);
  });

  it("should sort a list of one element", () => {
    expect(sort([1])).toEqual([1]);
  });

  it("should sort a list of two elements out of order", () => {
    expect(sort([2, 1])).toEqual([1, 2]);
  });

  it("should sort a list of 3 elements when the last two are out of order", () => {
    expect(sort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  it("should sort a list in reverse order", () => {
    expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
