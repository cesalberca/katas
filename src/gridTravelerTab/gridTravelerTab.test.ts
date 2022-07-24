import { gridTravelerTab } from "./gridTravelerTab";

describe("gridTravelerTab", () => {
  it("should be 1 for a table of 1 * 1", () => {
    expect(gridTravelerTab(1, 1)).toBe(1);
  });

  it("should be 6 for a table of 3 * 3", () => {
    expect(gridTravelerTab(3, 3)).toBe(6);
  });

  it("should pass the accepetance test", () => {
    expect(gridTravelerTab(18, 18)).toBe(2333606220);
  });
});
