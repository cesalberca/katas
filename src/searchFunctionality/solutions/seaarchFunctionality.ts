export const searchFunctionality = (cityNames: string[], char: string) => {
  if (char === "*") return cityNames;
  if (char.length < 2) return [];

  return cityNames.filter((city) =>
    city.toLowerCase().includes(char.toLowerCase())
  );
};
