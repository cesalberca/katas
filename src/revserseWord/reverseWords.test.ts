import { reverseWords } from "./revserseWords";

describe("revserWords", () => {
  it("should be the same word", () => {
    expect(reverseWords("a")).toBe("a");
  });

  it("should be the same word", () => {
    expect(reverseWords("a b")).toBe("b a");
  });
});
