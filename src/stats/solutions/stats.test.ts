import { G964 } from "./stats";
describe("stats", () => {
  it("should return an empty string when there is no times", () => {
    expect(G964.stat("")).toBe("");
  });

  it("should display the score for range, mea, and median when there is only one score", () => {
    expect(G964.stat("01|15|59")).toBe(
      "Range: 00|00|00 Average: 01|15|59 Median: 01|15|59"
    );
  });

  it("should siplay the range, the average and the median for two scrores", () => {
    expect(G964.stat("01|15|59")).toBe(
      "Range: 00|00|00 Average: 01|15|59 Median: 01|15|59"
    );
  });
});
