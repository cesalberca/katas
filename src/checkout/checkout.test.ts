import { checkout } from "./checkout";

describe("checkout", () => {
  it("should be 0 when there is no product", () => {
    expect(checkout("")).toBe(0);
  });

  it("should be 50 for A", () => {
    expect(checkout("A")).toBe(50);
  });

  it("should be 30 ofr B", () => {
    expect(checkout("B")).toBe(30);
  });

  it("should be 20 for C", () => {
    expect(checkout("C")).toBe(20);
  });

  it("should be 15 for D", () => {
    expect(checkout("D")).toBe(15);
  });

  it("should make the sum of the product", () => {
    expect(checkout("AA")).toBe(100);
  });

  it("should have a discount for 3 A", () => {
    expect(checkout("AAA")).toBe(130);
  });

  it("should have a discount every 3 A", () => {
    expect(checkout("AAAAAA")).toBe(260);
  });

  it("should have a discount evry 2 B", () => {
    expect(checkout("BBBB")).toBe(90);
  });

  it("should throw an error when there is an unknown item", () => {
    expect(() => checkout("Z")).toThrow("Unknown item");
  });

  it("should pass the acceptance test", () => {
    expect(checkout("AAABBBCCCDDD")).toBe(310);
  });
});
