import { streetFighterSelection } from "./streetFighterSelection";
describe("streetFighterSelection", () => {
  const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
  ];
  it("should be an empty list when there is no cursor move", () => {
    expect(streetFighterSelection(fighters, [0, 0], [])).toEqual([]);
  });

  it("should be E.honda when the initial position is 0,0 and the command are left", () => {
    expect(streetFighterSelection(fighters, [0, 0], ["right"])).toEqual([
      "E.Honda",
    ]);
  });

  it('should be "E.Honda", "Blanka" when the poistion is 0 0 and the moves 2 times left', () => {
    expect(
      streetFighterSelection(fighters, [0, 0], ["right", "right"])
    ).toEqual(["E.Honda", "Blanka"]);
  });

  it("should return on the beggining on the line when we are at the end horizontally", () => {
    expect(streetFighterSelection(fighters, [0, 5], ["right"])).toEqual([
      "Ryu",
    ]);
  });

  it("should ne able to move to the left", () => {
    expect(streetFighterSelection(fighters, [0, 1], ["left"])).toEqual(["Ryu"]);
  });

  it("should go to the end when we go left and are in the begging", () => {
    expect(streetFighterSelection(fighters, [0, 0], ["left"])).toEqual([
      "Vega",
    ]);
  });

  it("should be able to move up", () => {
    expect(streetFighterSelection(fighters, [1, 0], ["up"])).toEqual(["Ryu"]);
  });

  it("should stay in the same position when the cursor is already to the top", () => {
    expect(streetFighterSelection(fighters, [0, 0], ["up"])).toEqual(["Ryu"]);
  });

  it("should ne able to move down", () => {
    expect(streetFighterSelection(fighters, [0, 0], ["down"])).toEqual(["Ken"]);
  });

  it("should stay in the same position when the cursor is already to the bottom", () => {
    expect(streetFighterSelection(fighters, [1, 0], ["down"])).toEqual(["Ken"]);
  });

  it("should pass the acceptance test", () => {
    expect(
      streetFighterSelection(
        fighters,
        [0, 0],
        ["up", "left", "right", "left", "left"]
      )
    ).toEqual(["Ryu", "Vega", "Ryu", "Vega", "Balrog"]);
  });
});
