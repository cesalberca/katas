import { queueTime } from "./queue-time";

describe("queueTime", () => {
  it("should be 0 when there is no people and 1 machine", () => {
    expect(queueTime([], 1)).toBe(0);
  });

  it("should be the sum of the customers when there is one machine", () => {
    expect(queueTime([1, 2], 1)).toBe(3);
  });

  it("should be 10 when the customers are [10,2,3,3] and there is two machines", () => {
    expect(queueTime([10, 2, 3, 3], 2)).toBe(10);
  });

  it("should be 9 when the customers are [2,2,3,3,4,4] and there is two machines", () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
  });
});
