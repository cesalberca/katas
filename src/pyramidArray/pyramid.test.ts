import { pyramid } from "./pyramid";

describe("pyramid", () => {
  it("should be an empty array for 0", () => {
    expect(pyramid(0)).toEqual([]);
  });

  it("should be [[1]] for 1", () => {
    expect(pyramid(1)).toEqual([[1]]);
  });

  it("should be [[1],[1,1]]", () => {
    expect(pyramid(2)).toEqual([[1], [1, 1]]);
  });

  it("should pass the acceptance test", () => {
    expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
