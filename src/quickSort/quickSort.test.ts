import { quickSort } from "./quickSort";

describe("quickSort", () => {
  it("should sort an empty list", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should sort one element", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it("should stay the same when the list is already sorted", () => {
    expect(quickSort([1, 2])).toEqual([1, 2]);
  });

  it("should sort two elements out of order", () => {
    expect(quickSort([2, 1])).toEqual([1, 2]);
  });

  it("should sort three elements with first two out of order", () => {
    expect(quickSort([2, 1, 3])).toEqual([1, 2, 3]);
    expect(quickSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quickSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  it("should handle multiple middle elements", () => {
    expect(quickSort([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
  });
});
