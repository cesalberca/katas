import { solution } from "./roman-encoder";

describe("roman encoder", () => {
  it("should be I for 1", () => {
    expect(solution(1)).toBe("I");
  });

  it("should be II for 2", () => {
    expect(solution(2)).toBe("II");
  });

  it("should be III for 3", () => {
    expect(solution(3)).toBe("III");
  });

  it("should be V for 5", () => {
    expect(solution(5)).toBe("V");
  });

  it("should be IV for 4", () => {
    expect(solution(4)).toBe("IV");
  });

  it("should be VI for 6", () => {
    expect(solution(6)).toBe("VI");
  });

  it("should be IX for 9", () => {
    expect(solution(9)).toBe("IX");
  });

  it("should be X for 10", () => {
    expect(solution(10)).toBe("X");
  });

  it("should be XIV for 14", () => {
    expect(solution(14)).toBe("XIV");
  });

  it("should be XL for 40", () => {
    expect(solution(40)).toBe("XL");
  });

  it("should be XLIX for 49", () => {
    expect(solution(49)).toBe("XLIX");
  });

  it("should be L for 50", () => {
    expect(solution(50)).toBe("L");
  });

  it("should be LXXXVII for 87", () => {
    expect(solution(87)).toBe("LXXXVII");
  });

  it("should be XCIII for 93", () => {
    expect(solution(93)).toBe("XCIII");
  });

  it("should be CCCLIV for 354", () => {
    expect(solution(354)).toBe("CCCLIV");
  });

  it("should be CDXCIX for 499", () => {
    expect(solution(499)).toBe("CDXCIX");
  });

  it("should be DCCIII for 703", () => {
    expect(solution(703)).toBe("DCCIII");
  });

  it("should CMXCIX for 999", () => {
    expect(solution(999)).toBe("CMXCIX");
  });

  it("should pass the aceptance tests", () => {
    expect(solution(1990)).toBe("MCMXC");
    expect(solution(2008)).toBe("MMVIII");
    expect(solution(1444)).toBe("MCDXLIV");
  });
});
