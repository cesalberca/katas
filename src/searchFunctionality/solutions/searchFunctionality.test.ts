import { searchFunctionality } from "./seaarchFunctionality";

describe("searchFunctionality", () => {
  const cityNames = [
    "Paris",
    "Budapest",
    "Skopje",
    "Rotterdam",
    "Valencia",
    "Vancouver",
    "Amsterdam",
    "Vienna",
    "Sydney",
    "New York City",
    "London",
    "Bangkok",
    "Hong Kong",
    "Dubai",
    "Rome",
    "Istanbul",
  ];

  it.each`
    char
    ${""}
    ${"A"}
  `(
    "displays no results when there is less than 2 chars for $char",
    ({ char }) => {
      expect(searchFunctionality(cityNames, char)).toEqual([]);
    }
  );

  it("displays some results when there is more than 2 chars in that case Valencia and Vancouver for Va", () => {
    expect(searchFunctionality(cityNames, "Va")).toEqual([
      "Valencia",
      "Vancouver",
    ]);
  });

  it("displays some results when the searchValue is lowerCase", () => {
    expect(searchFunctionality(cityNames, "va")).toEqual([
      "Valencia",
      "Vancouver",
    ]);
  });

  it("should displays city even thoug the searchValue is only part of the name", () => {
    expect(searchFunctionality(cityNames, "ape")).toEqual(["Budapest"]);
  });

  it("displays all the cityNames when the searchValue is *", () => {
    expect(searchFunctionality(cityNames, "*")).toEqual(cityNames);
  });
});
