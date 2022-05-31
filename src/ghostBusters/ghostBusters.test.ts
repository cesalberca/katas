import { ghostBusters } from "./ghostBusters";

describe("ghostBusters", () => {
  it("should be You just wanted my autograph didn't you? for empty string", () => {
    expect(ghostBusters("")).toBe(
      "You just wanted my autograph didn't you? for empty string"
    );
  });

  it("should be the string without whiteSpace", () => {
    expect(ghostBusters("Factor y")).toBe("Factory");
  });

  it("should pass the acceptance test with multiple whitespaces", () => {
    expect(ghostBusters("O  f fi ce")).toBe("Office");
  });
});
