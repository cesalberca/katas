import { RomanNumerals } from "./roman-numerals-helper";

describe("RomanNumerals", () => {
  describe("fromRoman", () => {
    it("should be 1 for II", () => {
      expect(RomanNumerals.fromRoman("I")).toBe(1);
    });

    it("should be 2 for II", () => {
      expect(RomanNumerals.fromRoman("II")).toBe(2);
    });

    it("should be 3 for III", () => {
      expect(RomanNumerals.fromRoman("III")).toBe(3);
    });

    it("should be 4 for IV", () => {
      expect(RomanNumerals.fromRoman("IV")).toBe(4);
    });

    it("should be 5 for V", () => {
      expect(RomanNumerals.fromRoman("V")).toBe(5);
    });
    it("should be IX for 9", () => {
      expect(RomanNumerals.fromRoman("IX")).toBe(9);
    });

    it("should be 10 for X", () => {
      expect(RomanNumerals.fromRoman("X")).toBe(10);
    });
    it("should be 14 for XIV", () => {
      expect(RomanNumerals.fromRoman("XIV")).toBe(14);
    });

    it("should be 50 for L", () => {
      expect(RomanNumerals.fromRoman("L")).toBe(50);
    });

    it("should be 40 for XL", () => {
      expect(RomanNumerals.fromRoman("XL")).toBe(40);
    });

    it("should be 100 for C", () => {
      expect(RomanNumerals.fromRoman("C")).toBe(100);
    });

    it("should be 95 for XCV", () => {
      expect(RomanNumerals.fromRoman("XCV")).toBe(95);
    });

    it("should be 500 for D", () => {
      expect(RomanNumerals.fromRoman("D")).toBe(500);
    });

    it("should be 499 for CDXCIX", () => {
      expect(RomanNumerals.fromRoman("CDXCIX")).toBe(499);
    });

    it("should be M for 1000", () => {
      expect(RomanNumerals.fromRoman("M")).toBe(1000);
    });

    it("should be 900 for CM", () => {
      expect(RomanNumerals.fromRoman("CM")).toBe(900);
    });

    it("should pass the acceptance test", () => {
      expect(RomanNumerals.fromRoman("MMVIII")).toBe(2008);
      expect(RomanNumerals.fromRoman("MDCLXVI")).toBe(1666);
    });
  });

  describe("toRoman", () => {
    it("should be I for 1", () => {
      expect(RomanNumerals.toRoman(1)).toBe("I");
    });

    it("should be II for 2", () => {
      expect(RomanNumerals.toRoman(2)).toBe("II");
    });

    it("should be III for 3", () => {
      expect(RomanNumerals.toRoman(3)).toBe("III");
    });

    it("should be V for 5", () => {
      expect(RomanNumerals.toRoman(5)).toBe("V");
    });

    it("should be IV for 4", () => {
      expect(RomanNumerals.toRoman(4)).toBe("IV");
    });

    it("should be VI for 6", () => {
      expect(RomanNumerals.toRoman(6)).toBe("VI");
    });

    it("should be IX for 9", () => {
      expect(RomanNumerals.toRoman(9)).toBe("IX");
    });

    it("should be X for 10", () => {
      expect(RomanNumerals.toRoman(10)).toBe("X");
    });

    it("should be XIV for 14", () => {
      expect(RomanNumerals.toRoman(14)).toBe("XIV");
    });

    it("should be XL for 40", () => {
      expect(RomanNumerals.toRoman(40)).toBe("XL");
    });

    it("should be XLIX for 49", () => {
      expect(RomanNumerals.toRoman(49)).toBe("XLIX");
    });

    it("should be L for 50", () => {
      expect(RomanNumerals.toRoman(50)).toBe("L");
    });

    it("should be LXXXVII for 87", () => {
      expect(RomanNumerals.toRoman(87)).toBe("LXXXVII");
    });

    it("should be XCIII for 93", () => {
      expect(RomanNumerals.toRoman(93)).toBe("XCIII");
    });

    it("should be CCCLIV for 354", () => {
      expect(RomanNumerals.toRoman(354)).toBe("CCCLIV");
    });

    it("should be CDXCIX for 499", () => {
      expect(RomanNumerals.toRoman(499)).toBe("CDXCIX");
    });

    it("should be DCCIII for 703", () => {
      expect(RomanNumerals.toRoman(703)).toBe("DCCIII");
    });

    it("should CMXCIX for 999", () => {
      expect(RomanNumerals.toRoman(999)).toBe("CMXCIX");
    });

    it("should pass the aceptance tests", () => {
      expect(RomanNumerals.toRoman(1990)).toBe("MCMXC");
      expect(RomanNumerals.toRoman(2008)).toBe("MMVIII");
      expect(RomanNumerals.toRoman(1444)).toBe("MCDXLIV");
    });
  });
});
