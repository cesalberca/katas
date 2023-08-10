import { pipe } from "../../composingSoftware/composingSoftware";

const splitByEachrepetion = (str: string) => str.match(/(.)\1*/g);

const transformInDesiredFormat = (arr: Record<string, number>[]) =>
  arr.map((rep) => [rep[0], rep.length]);

export function longestRepetition(text: string): any {
  if (text.length === 0) return [text, 0];

  const arrOfRepetition = pipe(
    splitByEachrepetion,
    transformInDesiredFormat
  )(text);

  const maxNumber = Math.max(
    ...arrOfRepetition.map(([_, num]: [string, number]) => num)
  );

  return arrOfRepetition.filter(
    ([_, num]: [string, number]) => num === maxNumber
  )[0];
}
