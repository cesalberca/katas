import { isValidMessage } from "./isValidMessage";

describe("isValidMessage", () => {
  it("should be true for empty string", () => {
    expect(isValidMessage("")).toBe(true);
  });

  it("should be true false for digit that does not start with a digit", () => {
    expect(isValidMessage("code4hello5")).toBe(false);
  });

  it("should be false when the digit is not of a length of the word", () => {
    expect(isValidMessage("2hey")).toBe(false);
  });

  it("should be false 3hey5hello2hi5", () => {
    expect(isValidMessage("3hey5hello2hi5")).toBe(false);
  });

  it("should be false for 3hey4hello", () => {
    expect(isValidMessage("3hey4hello")).toBe(false);
  });

  it("should be true for 4code13hellocodewars", () => {
    expect(isValidMessage("4code13hellocodewars")).toBe(true);
  });

  it("should pass the acceptance test", () => {
    expect(isValidMessage("1a2bb3ccc4dddd5eeeee")).toBe(true);
  });
});
