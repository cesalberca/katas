import { getMissingIngredients } from "./getMissingIngredients";

describe("getMissingIngredients", () => {
  const recipe = { flour: 200, eggs: 1, sugar: 100 };
  it("should add nothing the cake is already complete", () => {
    expect(
      getMissingIngredients(recipe, { flour: 200, eggs: 1, sugar: 100 })
    ).toEqual({});
  });

  it("should add the ingredient when this one is missing", () => {
    expect(getMissingIngredients(recipe, { flour: 200, sugar: 100 })).toEqual({
      eggs: 1,
    });
  });

  it("should add already existing ingredients when there is not enough", () => {
    expect(
      getMissingIngredients(recipe, { flour: 200, sugar: 50, eggs: 1 })
    ).toEqual({
      sugar: 50,
    });
  });

  it("should add enough ingredients to bake more than one cake when there is more than for one in added", () => {
    expect(getMissingIngredients(recipe, { flour: 500, sugar: 200 })).toEqual({
      flour: 100,
      eggs: 3,
      sugar: 100,
    });
  });
});
