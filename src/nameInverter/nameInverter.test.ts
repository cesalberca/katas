import { nameInverter } from "./nameInverter";

describe("nameInverter", () => {
  const expectInverted = (
    origonalString: string | null,
    invertedString: string
  ) => expect(invertedString).toBe(nameInverter(origonalString));

  it("should be an empty string when it is null ", () => {
    expectInverted(null, "");
  });

  it("should be an empty string when it is an empty string ", () => {
    expectInverted("", "");
  });

  it("should be a simple name given a simple name", () => {
    expectInverted("Name", "Name");
  });

  it("should be Last First given a First last", () => {
    expectInverted("First Last", "Last, First");
  });

  it("should be Last, First, given a First last", () => {
    expectInverted("First Last", "Last, First");
  });

  it("should be Name given a Name withe spaces", () => {
    expectInverted(" Name ", "Name");
  });

  it("should be Last, First, given a First  last", () => {
    expectInverted(" First  Last ", "Last, First");
  });

  it("should ignore the honorifics", () => {
    expectInverted("Mr. First Last", "Last, First");
    expectInverted("Mrs. First Last", "Last, First");
  });

  it("should let the postNominals at end", () => {
    expectInverted("First Last Jr.", "Last, First Jr.");
    expectInverted("First Last BS. Phd.", "Last, First BS. Phd.");
  });

  it("should pass the acceptance test", () => {
    expectInverted(" Robert Martin III esq.    ", "Martin, Robert III esq.");
  });
});
