import { orderWeight } from "./orderWeight";

describe("orderWeight", () => {
  it("should be the same order for number alredy sorted", () => {
    expect(orderWeight("1 2")).toBe("1 2");
  });

  it("should be 1 2 for 2 1", () => {
    expect(orderWeight("2 1")).toBe("1 2");
  });

  it("should sort by weight", () => {
    expect(orderWeight("103 2000")).toBe("2000 103");
  });

  it("should sort by alphabetical order when there is number with same wheight", () => {
    expect(orderWeight("2000 11 11")).toBe("11 11 2000");
  });

  it("should pass the acceptance test", () => {
    expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe(
      "11 11 2000 10003 22 123 1234000 44444444 9999"
    );
  });
});
