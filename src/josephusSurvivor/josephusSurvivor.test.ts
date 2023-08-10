import { josephusSurvivor } from "./josephusSurvivor";

describe("josephusSurvivor", () => {
  describe("should be the last element when k is 1", () => {
    it("should be 3 when n is 3", () => {
      expect(josephusSurvivor(3, 1)).toEqual(3);
    });

    it("should be 10 when n is 10", () => {
      expect(josephusSurvivor(10, 1)).toEqual(10);
    });
  });

  it("should be 4 when n is 7 and 3 is k", () => {
    expect(josephusSurvivor(7, 3)).toEqual(4);
  });
});
