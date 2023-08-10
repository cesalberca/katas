import { dashatize } from "./dashatize";

describe("dashatize", () => {
  it("should be Nan when the input is not an integer", () => {
    expect(dashatize(1.6)).toBe("NaN");
  });

  it("should be the same number in string when the number has 1 digit", () => {
    expect(dashatize(0)).toBe("0");
  });

  it("should be dashatized when number is odd", () => {
    expect(dashatize(99)).toBe("9-9");
  });

  it("should not have dash when the number is not odd", () => {
    expect(dashatize(68)).toBe("68");
  });

  it("an evn number shoudl have dash after it when the next number is odd", () => {
    expect(dashatize(274)).toBe("2-7-4");
  });

  it("should handle negative number", () => {
    expect(dashatize(-1)).toBe("1");
    expect(dashatize(-28369)).toBe("28-3-6-9");
  });

  it("should pass the acceptance test ", () => {
    expect(dashatize(974302)).toBe("9-7-4-3-02");
    expect(dashatize(86320)).toBe("86-3-20");
  });
});
