import { humanReadable } from "./humanReadable";

describe("humanreadale", () => {
  it("should be 00:00:00 for 0 seconds", () => {
    expect(humanReadable(0)).toBe("00:00:00");
  });

  it("should be 00:00:05 for 5 seconds", () => {
    expect(humanReadable(5)).toBe("00:00:05");
  });

  it("should be 00:00:30 for 30 seconds", () => {
    expect(humanReadable(30)).toBe("00:00:30");
  });

  it("should be 00:01:00 for 60 seconds", () => {
    expect(humanReadable(60)).toBe("00:01:00");
  });

  it("should be 00:10:30 for 60 seconds", () => {
    expect(humanReadable(630)).toBe("00:10:30");
  });

  it("should be 01:00:00 for 60 seconds", () => {
    expect(humanReadable(3600)).toBe("01:00:00");
  });

  it("should pass the acceeptance test", () => {
    expect(humanReadable(86399)).toBe("23:59:59");
    expect(humanReadable(359999)).toBe("99:59:59");
  });
});
