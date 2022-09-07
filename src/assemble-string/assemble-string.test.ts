import { assembleString } from "./assemble-string";

describe("assembleString", () => {
  it("should be hello for [hello]", () => {
    expect(assembleString(["hello"])).toBe("hello");
  });

  it("should be cool for [cool]", () => {
    expect(assembleString(["cool"])).toBe("cool");
  });
  it("should be cool for [co*l]", () => {
    expect(assembleString(["co*l"])).toBe("co#l");
  });

  it("should be cool for [co*l,c*ol]", () => {
    expect(assembleString(["c*", "*o"])).toBe("co");
  });

  it("should be cool for [co*l,c*ol]", () => {
    expect(assembleString(["c*", "c*"])).toBe("c#");
  });

  it("should pass the acceptance test", () => {
    expect(
      assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])
    ).toBe("Hello, World!");
  });

  it("should handle empty arr", () => {
    expect(assembleString([])).toBe("");
  });
});
