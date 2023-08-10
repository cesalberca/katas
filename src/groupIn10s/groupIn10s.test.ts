import { groupIn10s } from "./groupIn10s";

describe("groupIn10s", () => {
  it("should handle 1 number in the first 10group", () => {
    expect(groupIn10s(1)).toEqual([[1]]);
  });

  it("should handle 1number first and second 10 groups", () => {
    expect(groupIn10s(1, 10)).toEqual([[1], [10]]);
  });

  it("should handle 2 number in the first and second groups of tens non sorted ", () => {
    expect(groupIn10s(2, 1, 12, 11)).toEqual([
      [1, 2],
      [11, 12],
    ]);
  });

  it("should the case when tehre is no numbers in the batch", () => {
    expect(groupIn10s(10)).toEqual([undefined, [10]]);
  });

  it("should pass the acceptance test", () => {
    expect(groupIn10s(100)).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      [100],
    ]);
  });

  it("should pass the acceptance test 2", () => {
    expect(
      groupIn10s(
        0,
        80,
        33,
        52,
        83,
        12,
        78,
        94,
        41,
        25,
        90,
        40,
        50,
        70,
        50,
        32,
        25,
        39,
        71,
        5,
        92,
        68,
        22,
        89,
        42,
        94,
        34,
        94,
        65,
        1,
        25,
        82
      )
    ).toEqual([
      [0, 1, 5],
      [12],
      [22, 25, 25, 25],
      [32, 33, 34, 39],
      [40, 41, 42],
      [50, 50, 52],
      [65, 68],
      [70, 71, 78],
      [80, 82, 83, 89],
      [90, 92, 94, 94, 94],
    ]);
  });
});
