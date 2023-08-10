import { dirReduc } from "./dirReduc";

describe("dirReduc", () => {
  it("should be the same directions", () => {
    expect(dirReduc(["NORTH", "EAST"])).toEqual(["NORTH", "EAST"]);
  });

  it("should stay at the same place when NORTH is before  SOUTH", () => {
    expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
  });

  it("should stay in the same place when SOUTH is before NORTH", () => {
    expect(dirReduc(["SOUTH", "NORTH"])).toEqual([]);
  });

  it("should stay in the same place when EAST is before WEST", () => {
    expect(dirReduc(["EAST", "WEST"])).toEqual([]);
  });

  it("should stay in the same place when WEST is before EAST", () => {
    expect(dirReduc(["WEST", "EAST"])).toEqual([]);
  });

  it("should be able to optimize the path in maximum", () => {
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    ).toEqual(["WEST"]);
  });

  it("should handle the edge case with EAST", () => {
    expect(dirReduc(["EAST", "WEST", "EAST"])).toEqual(["EAST"]);
  });

  it("should handle the edge case with WEST", () => {
    expect(dirReduc(["WEST", "EAST", "WEST"])).toEqual(["WEST"]);
  });

  it("should handle the edge case with NORTH", () => {
    expect(dirReduc(["NORTH", "SOUTH", "NORTH"])).toEqual(["NORTH"]);
  });

  it("should handle the edge case with SOUTH", () => {
    expect(dirReduc(["SOUTH", "NORTH", "SOUTH"])).toEqual(["SOUTH"]);
  });

  it("should pass the acceptance test", () => {
    expect(
      dirReduc([
        "SOUTH",
        "EAST",
        "NORTH",
        "SOUTH",
        "EAST",
        "WEST",
        "EAST",
        "NORTH",
      ])
    ).toEqual(["SOUTH", "EAST", "EAST", "NORTH"]);
  });
});
