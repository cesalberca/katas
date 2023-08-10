import { solve } from "./consonant-value";

describe("consonant-value", () => {
  it("should be 2 for z", () => {
    expect(solve("b")).toBe(2);
  });

  it("should be 2 for z", () => {
    expect(solve("c")).toBe(3);
  });

  it("should be 3 for abc", () => {
    expect(solve("abc")).toBe(5);
  });

  it("should be 2 for bu", () => {
    expect(solve("bu")).toBe(2);
  });

  it("pass the acceptance test", () => {
    expect(solve("strength")).toBe(57);
  });
});
