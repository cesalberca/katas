interface Saver {
  counter: number;
  result: undefined | number;
}

export function amountOfPages(summary: number) {
  return Array.from({ length: summary }, (_, i) => i + 1).reduce(
    (acc: Saver, curr) => {
      if (acc.result) return acc;
      acc.counter = acc.counter + curr.toString().length;
      if (acc.counter === summary) acc.result = curr;
      return acc;
    },
    { counter: 0, result: undefined }
  ).result;
}
