import { countPhotos } from "./count-photos";

describe("countPhotos", () => {
  describe("given that cars move forward", () => {
    it("should have 0 photos that has been taken when there is one camera", () => {
      expect(countPhotos(".")).toBe(0);
    });

    it("should have one photo taken when there is one car that pass by camera", () => {
      expect(countPhotos(">.")).toBe(1);
    });

    it("should have two photos taken when there is two car that pass by camera", () => {
      expect(countPhotos(">>.")).toBe(2);
    });

    it("should have five photos taken", () => {
      expect(countPhotos(">>.>.")).toBe(5);
    });
  });

  describe("given that cars move backward", () => {
    it("should take one photo", () => {
      expect(countPhotos(".<")).toBe(1);
    });

    it("should take three photos", () => {
      expect(countPhotos(".<.<")).toBe(3);
    });
  });

  it("should pass the acceptance test", () => {
    expect(countPhotos(".><.>>.<<")).toBe(11);
  });
});
