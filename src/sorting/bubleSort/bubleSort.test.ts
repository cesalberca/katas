import { bubleSort } from "./bubleSort";

describe("buble sort", () => {
  it("should be an empty list when the list of numbers is empty", () => {
    expect(bubleSort([])).toEqual([]);
  });

  it("should be 1 when there is only one in the list of numbers", () => {
    expect(bubleSort([1])).toEqual([1]);
  });

  it("should be 1,2 for 2,1", () => {
    expect(bubleSort([2, 1])).toEqual([1, 2]);
  });

  it("should be 1,2,3,4 for 2,3,4,1", () => {
    expect(bubleSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  });

  it("should handle normal list", () => {
    expect(bubleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("should handle a complexe list", () => {
    expect(bubleSort([4, 3, 1, 2])).toEqual([1, 2, 3, 4]);
  });
});
