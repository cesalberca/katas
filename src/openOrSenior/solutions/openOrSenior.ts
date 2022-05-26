export const openOrSenior = (data: [number, number][]): string[] =>
  data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'))
