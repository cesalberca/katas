import { dirReduc } from "./directionReduction";

describe("directionReduction", () => {
  it("should be [] for []", () => {
    expect(dirReduc([])).toEqual([]);
  });
  it('should be north for ["NORTH"]', () => {
    expect(dirReduc(["NORTH"])).toEqual(["NORTH"]);
  });

  it('should be [] for ["NORTH","SOUTH"]', () => {
    expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
  });

  it('should be [] for ["SOUTH","NORTH"]', () => {
    expect(dirReduc(["SOUTH", "NORTH"])).toEqual([]);
  });

  it('should be [] for ["EAST","WEST"]', () => {
    expect(dirReduc(["EAST", "WEST"])).toEqual([]);
  });

  it('should be [] for ["WEST","EAST"]', () => {
    expect(dirReduc(["WEST", "EAST"])).toEqual([]);
  });

  it('should be [] for ["WEST","EAST","SOUTH"]', () => {
    expect(dirReduc(["WEST", "EAST", "SOUTH"])).toEqual(["SOUTH"]);
  });

  it('should be ["WEST"] for ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]', () => {
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    ).toEqual(["WEST"]);
  });
});
