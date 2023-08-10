import { amountOfPages } from "./amount-of-pages";

describe("amountOfPages", () => {
  it("has 1 page for 1", () => {
    expect(amountOfPages(1)).toBe(1);
  });

  it("has 5 pages for 5 ", () => {
    expect(amountOfPages(5)).toBe(5);
  });

  it("has 13 pages for 11", () => {
    expect(amountOfPages(13)).toBe(11);
  });

  it("should pass the accepatnce test", () => {
    expect(amountOfPages(1095)).toBe(401);
  });
});
