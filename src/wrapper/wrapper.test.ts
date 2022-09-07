import { wrap } from "./wrapper";

describe("wrapper", () => {
  const expectWordToBeWrapped = (
    inputString: string | null,
    maxWidth: number,
    expectedString: string
  ) => expect(wrap(inputString, maxWidth)).toBe(expectedString);

  it("should be an empty string given null", () => {
    expectWordToBeWrapped(null, 1, "");
  });

  it("should be an emptuy string given an empty string", () => {
    expectWordToBeWrapped("", 1, "");
  });

  it("should be one char given one char", () => {
    expectWordToBeWrapped("x", 1, "x");
  });

  it("should split the string given a max-width longer than the string", () => {
    expectWordToBeWrapped("xx", 1, "x\nx");
  });

  it("should split the string multiple times given a max-width longer than the string", () => {
    expectWordToBeWrapped("xxx", 1, "x\nx\nx");
  });

  it("should empty spaces at the places of the max-width", () => {
    expectWordToBeWrapped("x x", 1, "x\nx");
  });

  it("should pass the acceprance test", () => {
    expectWordToBeWrapped("x xx", 3, "x\nxx");
  });
});
