export const getMissingIngredients = (
  recipe: Record<string, number>,
  added: Record<string, number>
) => {
  const numberOfCakes = Object.keys(recipe).reduce((acc, ingredient) => {
    if (added[ingredient] > recipe[ingredient]) {
      const numOfcakes = Math.ceil(added[ingredient] / recipe[ingredient]);
      numOfcakes > acc ? (acc = numOfcakes) : acc;
      return acc;
    }
    return acc;
  }, 1);

  const updatedRecipe = Object.keys(recipe).reduce(
    (acc: Record<string, number>, ingredient) => ({
      ...acc,
      [ingredient]: recipe[ingredient] * numberOfCakes,
    }),
    {}
  );

  return Object.keys(recipe).reduce((acc, ingredient) => {
    if (!added[ingredient]) {
      return { ...acc, [ingredient]: updatedRecipe[ingredient] };
    }
    if (added[ingredient] < updatedRecipe[ingredient]) {
      return {
        ...acc,
        [ingredient]: updatedRecipe[ingredient] - added[ingredient],
      };
    }
    return acc;
  }, {});
};
