import { formatDuration } from "./formatDuration";

describe("formatdDuration", () => {
  it("should display nothing in case of 0", () => {
    expect(formatDuration(0)).toBe("now");
  });

  it("should display 1 second in case of 1", () => {
    expect(formatDuration(1)).toBe("1 second");
  });

  it("should display 2 seconds in case of 2", () => {
    expect(formatDuration(2)).toBe("2 seconds");
  });

  it("should be 1 minute for 60", () => {
    expect(formatDuration(60)).toBe("1 minute");
  });

  it("should be 2 minutes and 5 second for 125", () => {
    expect(formatDuration(125)).toBe("2 minutes and 5 seconds");
  });

  it("should be 1 hour for 3600", () => {
    expect(formatDuration(3600)).toBe("1 hour");
  });

  it("should be 1 hour, 1 minute and 2 seconds for 3662", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
  });

  it("should be 1 day for 86400", () => {
    expect(formatDuration(86400)).toBe("1 day");
  });

  it("should be 1 day for 86400", () => {
    expect(formatDuration(86400)).toBe("1 day");
  });

  it("should be 1 day and 2 seconds", () => {
    expect(formatDuration(86402)).toBe("1 day and 2 seconds");
  });

  it("should be 2 days, 1 hour, 1 minute and 2 seconds for 176462", () => {
    expect(formatDuration(176462)).toBe(
      "2 days, 1 hour, 1 minute and 2 seconds"
    );
  });

  it("should be 1 year for 31536000", () => {
    expect(formatDuration(31536000)).toBe("1 year");
  });

  it("should be 1 year, 2 days, 1 hour, 1 minute and 2 seconds for 31712462", () => {
    expect(formatDuration(31712462)).toBe(
      "1 year, 2 days, 1 hour, 1 minute and 2 seconds"
    );
  });

  it("should be 1 hour and 1 minute for 3660", () => {
    expect(formatDuration(3660)).toBe("1 hour and 1 minute");
  });

  it("should pass the acceptance test", () => {
    expect(formatDuration(8661642)).toBe("100 days, 6 hours and 42 seconds");
    expect(formatDuration(132030240)).toBe(
      "4 years, 68 days, 3 hours and 4 minutes"
    );
  });
});
