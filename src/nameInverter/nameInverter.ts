const isHonorific = (potentialHonorific: string): boolean =>
  ["Mr.", "Mrs."].includes(potentialHonorific);

const buildInvertedName = (firstName: string, lastname: string): string =>
  `${lastname}, ${firstName}`;

const nameFormatedWiPostnominals = (names: string[]): string => {
  const postNominals = names.slice(2, names.length).join(" ");
  return `${buildInvertedName(names[0], names[1])} ${postNominals}`;
};

export const nameInverter = (name: string | null): string => {
  if (name === null) return "";
  const names = name.trim().split(/\s+/);
  if (isHonorific(names[0])) return buildInvertedName(names[1], names[2]);
  if (names.length === 1) return names[0];
  if (names.length > 2) return nameFormatedWiPostnominals(names);
  return buildInvertedName(names[0], names[1]);
};
