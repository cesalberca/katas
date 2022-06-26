import { superStreetFighterSelection } from "./superStreetFighterSelection";

describe("superStreetFighterSelection", () => {
  const fighters = [
    ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
    ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
    ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
  ];

  it("should have an empty list of hovered fighters when the list of moves is empty", () => {
    expect(superStreetFighterSelection(fighters, [0, 0], [])).toEqual([]);
  });

  describe("move right", () => {
    it("should be able to move to the right", () => {
      expect(superStreetFighterSelection(fighters, [0, 1], ["right"])).toEqual([
        "E.Honda",
      ]);
    });

    it("should go the beggining when i hit the end of the row for a right move", () => {
      expect(superStreetFighterSelection(fighters, [1, 5], ["right"])).toEqual([
        "Balrog",
      ]);
    });

    it("should ignore empty case when there are at the end when cursor move to right", () => {
      expect(superStreetFighterSelection(fighters, [0, 4], ["right"])).toEqual([
        "Ryu",
      ]);
    });

    it("should be able to handle empty space even when they are not at the end", () => {
      const fighters = [
        ["", "Ryu", "E.Honda", "Cammy", "Blanka", "Guile", "", "Chun Li"],
        [
          "Balrog",
          "Ken",
          "Chun Li",
          "",
          "M.Bison",
          "Zangief",
          "Dhalsim",
          "Sagat",
        ],
        ["Vega", "", "Fei Long", "Balrog", "Deejay", "Cammy", "", "T.Hawk"],
      ];

      expect(superStreetFighterSelection(fighters, [0, 5], ["right"])).toEqual([
        "Chun Li",
      ]);
    });
  });

  describe("move left", () => {
    it("should be able to move left", () => {
      expect(superStreetFighterSelection(fighters, [0, 2], ["left"])).toEqual([
        "Ryu",
      ]);
    });

    it("should go the end when i hit the begginnig of the row for a right move", () => {
      expect(superStreetFighterSelection(fighters, [1, 0], ["left"])).toEqual([
        "Sagat",
      ]);
    });

    it("should ignore empty case when there are at the end when cursor move to right", () => {
      expect(superStreetFighterSelection(fighters, [0, 1], ["left"])).toEqual([
        "Guile",
      ]);
    });

    it("should be able to handle empty space even when they are not at the end", () => {
      const fighters = [
        ["", "Ryu", "E.Honda", "Cammy", "Blanka", "Guile", "", "Chun Li"],
        [
          "Balrog",
          "Ken",
          "Chun Li",
          "",
          "M.Bison",
          "Zangief",
          "Dhalsim",
          "Sagat",
        ],
        ["Vega", "", "Fei Long", "Balrog", "Deejay", "Cammy", "", "T.Hawk"],
      ];

      expect(superStreetFighterSelection(fighters, [0, 7], ["left"])).toEqual([
        "Guile",
      ]);
    });
  });

  describe("move up", () => {
    it("should be able to move up", () => {
      expect(superStreetFighterSelection(fighters, [1, 1], ["up"])).toEqual([
        "Ryu",
      ]);
    });

    it("should let the cursor in the same place when it hit the ceiling", () => {
      expect(superStreetFighterSelection(fighters, [0, 1], ["up"])).toEqual([
        "Ryu",
      ]);
    });

    it("should let the cursor in the same place when it hit the cell of the firt column is empty", () => {
      expect(superStreetFighterSelection(fighters, [1, 0], ["up"])).toEqual([
        "Balrog",
      ]);
    });
  });

  describe("move down", () => {
    it("should be able to move down", () => {
      expect(superStreetFighterSelection(fighters, [0, 1], ["down"])).toEqual([
        "Ken",
      ]);
    });

    it("should let the cursor in the same position when it hits the bottom", () => {
      expect(superStreetFighterSelection(fighters, [2, 0], ["down"])).toEqual([
        "Vega",
      ]);
    });

    it("should let the cursor in the same position when the next cell is in the last column and is empty", () => {
      const fighters = [
        ["", "Ryu", "E.Honda", "Cammy"],
        ["Balrog", "Ken", "Chun Li", ""],
        ["Vega", "", "Fei Long", "Balrog"],
        ["Blanka", "Guile", "", "Chun Li"],
        ["M.Bison", "Zangief", "Dhalsim", "Sagat"],
        ["Deejay", "Cammy", "", "T.Hawk"],
      ];

      expect(superStreetFighterSelection(fighters, [4, 2], ["down"])).toEqual([
        "Dhalsim",
      ]);
    });
  });

  describe("acceptance tests", () => {
    it("should pass the first acceptance test", () => {
      const fighters = [
        ["", "Ryu", "E.Honda", "Cammy"],
        ["Balrog", "Ken", "Chun Li", ""],
        ["Vega", "", "Fei Long", "Balrog"],
        ["Blanka", "Guile", "", "Chun Li"],
        ["M.Bison", "Zangief", "Dhalsim", "Sagat"],
        ["Deejay", "Cammy", "", "T.Hawk"],
      ];

      const moves = [
        "left",
        "left",
        "down",
        "right",
        "right",
        "right",
        "right",
        "down",
        "left",
        "left",
        "left",
        "left",
        "up",
        "right",
        "right",
        "up",
        "right",
        "right",
        "right",
      ];

      const expected = [
        "Guile",
        "Blanka",
        "M.Bison",
        "Zangief",
        "Dhalsim",
        "Sagat",
        "M.Bison",
        "Deejay",
        "T.Hawk",
        "Cammy",
        "Deejay",
        "T.Hawk",
        "Sagat",
        "M.Bison",
        "Zangief",
        "Guile",
        "Chun Li",
        "Blanka",
        "Guile",
      ];

      expect(superStreetFighterSelection(fighters, [3, 3], moves)).toEqual(
        expected
      );
    });
  });

  it("should pass the second acceptance test", () => {
    const fighters = [
      ["", "Ryu", "E.Honda", "Cammy", "Blanka", "Guile", "", "Chun Li"],
      [
        "Balrog",
        "Ken",
        "Chun Li",
        "",
        "M.Bison",
        "Zangief",
        "Dhalsim",
        "Sagat",
      ],
      ["Vega", "", "Fei Long", "Balrog", "Deejay", "Cammy", "", "T.Hawk"],
    ];

    const moves = [
      "down",
      "right",
      "right",
      "right",
      "down",
      "left",
      "left",
      "down",
      "right",
      "right",
      "right",
      "up",
    ];

    const expected = [
      "Cammy",
      "Blanka",
      "Guile",
      "Chun Li",
      "Sagat",
      "Dhalsim",
      "Zangief",
      "Cammy",
      "T.Hawk",
      "Vega",
      "Fei Long",
      "Chun Li",
    ];

    expect(superStreetFighterSelection(fighters, [0, 3], moves)).toEqual(
      expected
    );
  });
});
