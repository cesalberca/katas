import { multiplicationTable } from "./multiplicationTable";

describe("multiplicationTable", () => {
  it("should display the first operation of the multiplication table of one ", () => {
    expect(multiplicationTable(1)).toEqual([[1]]);
  });

  it("should display the first two operation of the multiplication table of  1 and 2", () => {
    expect(multiplicationTable(2)).toEqual([
      [1, 2],
      [2, 4],
    ]);
  });

  it("should pass the acceptance test with 3 ", () => {
    expect(multiplicationTable(3)).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
