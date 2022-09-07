import { countConstructTab } from "./countCounstructTab";

describe("countCounstructTab", () => {
  it("should should be always one when target is an empty string", () => {
    expect(countConstructTab("", ["a", "b", "c"])).toEqual(1);
  });

  it("should be zero when the target is impossible to construct", () => {
    expect(countConstructTab("cfgh", ["h", "fg", "d"])).toEqual(0);
  });

  it("should be able to construct the word with diffrent possiblilities", () => {
    expect(
      countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"])
    ).toEqual(2);
  });
});
