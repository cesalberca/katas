import { checkout } from "./checkout2";

describe("checkout2", () => {
  it("should be 0 when there is no item", () => {
    expect(checkout("")).toBe(0);
  });

  it("should be 50 when the product is A", () => {
    expect(checkout("A")).toBe(50);
  });

  it("should be 30 when the product is B", () => {
    expect(checkout("B")).toBe(30);
  });

  it("should be 30 when the product is B", () => {
    expect(checkout("C")).toBe(20);
  });

  it("should be 30 when the product is B", () => {
    expect(checkout("D")).toBe(15);
  });

  it("should be able to sum products", () => {
    expect(checkout("ABCD")).toBe(115);
  });

  it("should throw an error when the product is unknown", () => {
    expect(() => checkout("Z")).toThrow("unkonwn product");
  });

  it("should decrease  by 20 when there are 3 A products", () => {
    expect(checkout("AAA")).toBe(130);
  });

  it("should decrease  by 15 when there are 2 B products", () => {
    expect(checkout("BB")).toBe(45);
  });

  it("should pass the acceptance test", () => {
    expect(checkout("AAABBBCCCDDD")).toBe(310);
  });
});
