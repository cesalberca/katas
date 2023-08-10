import { score } from "./score";

describe("score", () => {
  it("should be zero for useless values", () => {
    expect(score([2, 6, 4, 3])).toBe(0);
  });

  it("should be 500 for three 5", () => {
    expect(score([5, 5, 5])).toBe(500);
  });

  it("should be 1000 for three 1", () => {
    expect(score([1, 1, 1])).toBe(1000);
  });

  it("should be 2000 for 6 1", () => {
    expect(score([1, 1, 1, 1, 1, 1])).toBe(2000);
  });

  it("should be 600 for three 6", () => {
    expect(score([6, 6, 6])).toBe(600);
  });

  it("should be 400 for three 4", () => {
    expect(score([4, 4, 4])).toBe(400);
  });

  it("should be 300 for three 3", () => {
    expect(score([3, 3, 3])).toBe(300);
  });

  it("should be 200 for three 2", () => {
    expect(score([2, 2, 2])).toBe(200);
  });

  it("should be 550 for four 5", () => {
    expect(score([5, 5, 5, 5])).toBe(550);
  });

  it("should be 1110 for four 1", () => {
    expect(score([1, 1, 1, 1])).toBe(1100);
  });

  it("should pass the acceptance tests", () => {
    expect(score([1, 1, 1, 1, 1, 1, 1])).toBe(2100);
    expect(score([2, 4, 4, 5, 4])).toBe(450);
  });
});
