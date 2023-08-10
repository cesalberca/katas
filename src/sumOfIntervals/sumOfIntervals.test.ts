import { sumOfIntervals } from "./sumOfIntervals";

describe("sumOfIntervals", () => {
  it("should handle when there is an intervval of 0 ", () => {
    expect(sumOfIntervals([[1, 1]])).toBe(0);
  });

  it("should be 4 when there is an interval of 1 and 5 in the list", () => {
    expect(sumOfIntervals([[1, 5]])).toBe(4);
  });

  it("should 4 when there is the same interval of 1 and 5 multiple times in the list", () => {
    expect(
      sumOfIntervals([
        [1, 5],
        [1, 5],
      ])
    ).toBe(4);
  });

  it("should take into account overlapping interavals when they are sorted", () => {
    expect(
      sumOfIntervals([
        [1, 4],
        [3, 5],
        [7, 10],
      ])
    ).toBe(7);
  });

  it("should take into account overlapping intervals when thre are not sorted", () => {
    expect(
      sumOfIntervals([
        [1, 4],
        [7, 10],
        [3, 5],
      ])
    ).toBe(7);
  });

  it("acceptance test", () => {
    expect(
      sumOfIntervals([
        [392, 406],
        [-84, 29],
        [-277, 47],
        [23, 414],
        [-97, 475],
        [387, 403],
        [-252, 80],
        [464, 479],
        [-157, 196],
        [-248, 440],
        [215, 376],
        [342, 364],
        [155, 430],
        [320, 345],
        [-152, 476],
        [267, 297],
      ])
    ).toBe(756);
  });
});
