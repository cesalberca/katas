import { stringTransformer } from "./stringTransformer";

describe("stringTransformer", () => {
  it("should be an empty string", () => {
    expect(stringTransformer("")).toBe("");
  });

  it("should be A for a", () => {
    expect(stringTransformer("a")).toBe("A");
  });

  it("should be a for A", () => {
    expect(stringTransformer("A")).toBe("a");
  });

  it("should be Ab for aB", () => {
    expect(stringTransformer("aB")).toBe("Ab");
  });

  it("should be c Ab for aB C", () => {
    expect(stringTransformer("aB C")).toBe("c Ab");
  });

  it("should pass the acceptance test", () => {
    expect(stringTransformer(" A b C d E f G ")).toBe(" g F e D c B a ");
  });
});
