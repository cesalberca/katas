import { mineField } from "./mineField";

describe("mineField", () => {
  it("should be empty string for an empty string", () => {
    expect(mineField("")).toBe("");
  });

  it("should be * given a mine", () => {
    expect(mineField("*")).toBe("*");
  });

  it("should be a zero given a mine", () => {
    expect(mineField(".")).toBe("0");
  });

  it("should be able handle multiple chars", () => {
    expect(mineField("..")).toBe("00");
  });

  it("should be able handle multiple chars with mine", () => {
    expect(mineField("**")).toBe("**");
  });

  it("should be able to incerement when there is a mine behind", () => {
    expect(mineField(".*")).toBe("1*");
  });

  it("should be able to incerement when there is a mine a head", () => {
    expect(mineField("*.")).toBe("*1");
  });

  it("should be able to incerement multiple times", () => {
    expect(mineField("*.*")).toBe("*2*");
  });

  it("should be able to incerement multiple times", () => {
    expect(mineField("*.*.")).toBe("*2*1");
  });

  it("should be able simple multiple row", () => {
    expect(mineField(".\n.")).toBe("0\n0");
  });

  it("should be able to transform a mine in the next row", () => {
    expect(mineField(".\n*")).toBe("1\n*");
  });

  it("should be abe=le to transform a case in the previous row", () => {
    expect(mineField("*\n.")).toBe("*\n1");
  });

  it("should be able to incerement in right down", () => {
    expect(mineField("*.\n..")).toBe("*1\n11");
  });

  it("should be able to increment left down", () => {
    expect(mineField(".*\n..")).toBe("1*\n11");
  });

  it("should be able to increment left up", () => {
    expect(mineField("..\n.*")).toBe("11\n1*");
  });

  it("should be able to increment right up", () => {
    expect(mineField("..\n*.")).toBe("11\n*1");
  });

  it("should pass the acceptance test", () => {
    expect(mineField("*...\n..*.\n....")).toEqual("*211\n12*1\n0111");
  });
});
