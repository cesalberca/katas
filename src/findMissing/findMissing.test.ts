import { findMissing } from "./findMissing";

describe("findMissing", () => {
  it("should be 2 for [1,3]", () => {
    expect(findMissing([1, 3, 4])).toBe(2);
  });

  it("should be 4 for [3,5]", () => {
    expect(findMissing([3, 5, 6])).toBe(4);
  });

  it("should be 3 for [1,2,4,5]", () => {
    expect(findMissing([1, 2, 4, 5])).toBe(3);
  });

  it("should pass the acceptance test", () => {
    expect(findMissing([1, 3, 5, 9, 11])).toBe(7);
  });

  it("should work for positive numbers", () => {
    expect(
      findMissing([
        -7, -16, -25, -34, -43, -52, -61, -70, -79, -88, -97, -106, -115, -124,
        -133, -142, -151, -160, -169, -178, -187, -205, -214, -223, -232, -241,
        -250, -259, -268, -277, -286, -295, -304, -313, -322, -331, -340, -349,
        -358, -367, -376, -385,
      ])
    ).toBe(-196);
  });

  it("should work with zero", () => {
    expect(findMissing([-3, -1, 3])).toBe(1);
  });
});
