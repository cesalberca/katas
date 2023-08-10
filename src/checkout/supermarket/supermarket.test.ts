import { supermarket } from "./supermarket";

describe("supermarket", () => {
  it("should cost 0 when there is no product", () => {
    expect(supermarket("")).toBe(0);
  });

  it("should cost 50  for A", () => {
    expect(supermarket("A")).toBe(50);
  });

  it("should cost 50  for B", () => {
    expect(supermarket("B")).toBe(30);
  });

  it("should cost 20  for C", () => {
    expect(supermarket("C")).toBe(20);
  });

  it("should cost 15  for D", () => {
    expect(supermarket("D")).toBe(15);
  });

  it("should cost 50  for A", () => {
    expect(supermarket("AA")).toBe(100);
  });

  it("should cost 50  for A", () => {
    expect(supermarket("AA")).toBe(100);
  });

  it("should cost 115  for A", () => {
    expect(supermarket("ABCD")).toBe(115);
  });

  it("should be 45 for BB", () => {
    expect(supermarket("BB")).toBe(45);
  });

  it("should be 90 for BBBB", () => {
    expect(supermarket("BBBB")).toBe(90);
  });

  it("should be 130 for AAAA", () => {
    expect(supermarket("AAA")).toBe(130);
  });

  it("should be 260", () => {
    expect(supermarket("AAAAAA")).toBe(260);
  });

  it("should be 465 for ABCDAAAAAABBBB", () => {
    expect(supermarket("ABCDAAAAAABBBB")).toBe(465);
  });

  it("should fails fast when there is an unknown item", () => {
    expect(() => supermarket("ABCDAAAAAXABBBB")).toThrowError("Unknown item");
  });

  it("should fails fast when there is an unknown item", () => {
    expect(() => supermarket("ABCDAAAAAZABBBB")).toThrowError("Unknown item");
  });
});
