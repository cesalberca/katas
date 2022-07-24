import { whatCentury } from "./whatCentury";

describe("whatCentury", () => {
  it("should be able to calculate century with first at the end", () => {
    expect(whatCentury("2001")).toBe("21st");
  });

  it("should be 20th for the 2000 year", () => {
    expect(whatCentury("2000")).toBe("20th");
  });

  it("should be able to calculate century with second at the end", () => {
    expect(whatCentury("2154")).toBe("22nd");
  });

  it("should be able to calculate century with third at the end", () => {
    expect(whatCentury("2254")).toBe("23rd");
  });

  it("should be able to calculate century ", () => {
    expect(whatCentury("1999")).toBe("20th");
  });

  it("should be th at the end if the century is below 20", () => {
    expect(whatCentury("1234")).toBe("13th");
    expect(whatCentury("1134")).toBe("12th");
    expect(whatCentury("1034")).toBe("11th");
  });

  it("should handle the first 3 century", () => {
    expect(whatCentury("0")).toBe("1st");
    expect(whatCentury("1")).toBe("2nd");
    expect(whatCentury("2")).toBe("3rd");
  });
});
