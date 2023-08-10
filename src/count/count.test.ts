import { count } from "./count";

describe("count", () => {
  it("should be an empty object for an empty string", () => {
    expect(count("")).toEqual({});
  });

  it("should be 1 a for a", () => {
    expect(count("a")).toEqual({ a: 1 });
  });

  it("should be 1 b for b", () => {
    expect(count("b")).toEqual({ b: 1 });
  });

  it("should be 1 b and 1 c for bb", () => {
    expect(count("bc")).toEqual({ b: 1, c: 1 });
  });

  it("should be 2 bb for bb", () => {
    expect(count("bb")).toEqual({ b: 2 });
  });

  it("should be 1 a , 2 b , 1 c for abbc", () => {
    expect(count("abbc")).toEqual({ a: 1, b: 2, c: 1 });
  });
});
