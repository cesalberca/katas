import { diamond } from "./diamond";

describe("building a diamond string of size n", () => {
  describe("edge cases", () => {
    it("should not build diamond string when the size is negative", () => {
      expect(diamond(-2)).toBe(null);
    });

    it("should not build diamond string when there is an even number", () => {
      expect(diamond(0)).toBe(null);
      expect(diamond(2)).toBe(null);
    });
  });

  describe("diamond building", () => {
    it("should build a diamond of size 1", () => {
      expect(diamond(1)).toBe("*\n");
    });

    it("should build a diamond of size 3", () => {
      expect(diamond(3)).toBe(" *\n***\n *\n");
    });

    it("should build a diamond of size 5", () => {
      expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n");
    });

    it("should pass the acceptance test", () => {
      expect(diamond(7)).toBe(
        "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n"
      );
    });
  });
});
