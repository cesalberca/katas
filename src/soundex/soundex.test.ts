import { soundex, encodedDigit } from "./soundex";

describe("soundex", () => {
  it("retains sole letter of one letter word and add three zeros at the end", () => {
    expect(soundex("I")).toBe("I000");
  });

  it("replaces consonants by digits", () => {
    expect(soundex("Ax")).toBe("A200");
  });

  it("should ignore non alphabetic chars", () => {
    expect(soundex("A#")).toBe("A000");
  });

  it("should replace multiple consonants by digits", () => {
    expect(soundex("Acdl")).toBe("A234");
  });

  it("should limit the length to four chars", () => {
    expect(soundex("Dcdlb").length).toBe(4);
  });

  it("should drop all vowels letters like", () => {
    expect(soundex("Baeiouyhwcdl")).toBe("B234");
    expect(soundex("BAaEeIiOoUuYyHhWwcdl")).toBe("B234");
  });

  it("combines duplicate encoding", () => {
    expect(encodedDigit("b")).toBe(encodedDigit("f"));
    expect(encodedDigit("c")).toBe(encodedDigit("g"));
    expect(encodedDigit("d")).toBe(encodedDigit("t"));

    expect(soundex("Abfcgdt")).toBe("A123");
  });

  it("should always have the first letter in upper case", () => {
    expect(soundex("abcd")[0]).toBe("A");
  });

  it("should ignore cases when encoding consonants", () => {
    expect(soundex("ABCD")).toBe(soundex("Abcd"));
  });

  it("should combines code when two letters duplicate first", () => {
    expect(soundex("Bbcd")).toBe("B230");
  });

  it("combines duplicate encoding separated by vowels", () => {
    expect(soundex("Jbob")).toBe("J110");
  });

  it("should handle multiple words", () => {
    expect(soundex("Sarah Connor")).toBe("S600 C560");
  });

  it("should handle duplicate encoded characters", () => {
    expect(soundex("Ashcraft")).toBe("A261");
  });

  it("should handle bug fixes", () => {
    expect(soundex("zxqurlwbx")).toBe("Z641");
  });
});
