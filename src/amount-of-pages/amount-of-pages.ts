interface Saver {
  counter: number;
  result: undefined | number;
}

export const amountOfPages = (summary: number) =>
  Array.from({ length: summary }, (_, i) => i + 1).reduce(
    (acc: Saver, curr) => {
      if (acc.result) return acc;
      acc = { ...acc, counter: acc.counter + curr.toString().length };
      if (acc.counter === summary) acc = { ...acc, result: curr };
      return acc;
    },
    { counter: 0, result: undefined }
  ).result;
