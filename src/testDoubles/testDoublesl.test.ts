import { placeDescriptionService, httpInMemory } from "./testDoubles";

describe("summary description", () => {
  const descriptionFixture = {
    address: {
      road: "Drury Ln",
      city: "Fountain",
      state: "CO",
      country: "US",
    },
  };
  it("retrieve description for valid location", async () => {
    const validLat = "48.8";
    const validLng = "2,25";

    const description = await placeDescriptionService(
      httpInMemory(descriptionFixture, undefined)
    ).get(validLat, validLng);

    expect(description).toBe("Drury Ln, Fountain, CO, US");
  });

  it("should display an http error message when retriving description goes wrong", async () => {
    const error = await placeDescriptionService(
      httpInMemory(descriptionFixture, "network error")
    ).get();

    expect(error).toBe("network error");
  });
});
