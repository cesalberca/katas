import { Mormons } from "./Mormons";

describe("Mormons", () => {
  it("should be 0 when the starting number is alredy above the target", () => {
    expect(Mormons(10, 3, 9)).toBe(0);
  });

  it("should be 1 when the starting number is 40 , the reach is 2 and the traget 120", () => {
    expect(Mormons(40, 2, 120)).toBe(1);
  });

  it("should pass the accetptance test", () => {
    expect(Mormons(20000, 2, 7000000000)).toBe(12);
  });
});
