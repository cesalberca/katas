import { zipWith } from "../zip-with";

describe("zip with", () => {
  it("should be an empty array when both array are empty", () => {
    expect(zipWith(Math.max, [], [])).toEqual([]);
  });

  it("should zip the two arrays together", () => {
    expect(zipWith(Math.max, [1], [2])).toEqual([2]);
    expect(zipWith(Math.max, [1, 3], [2, 1])).toEqual([2, 3]);
    expect(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toEqual([
      4, 7, 7, 4, 7, 7,
    ]);
  });

  it("the output array should have the size of the smaller input array", () => {
    expect(zipWith(Math.max, [1], [])).toEqual([]);
  });
});
