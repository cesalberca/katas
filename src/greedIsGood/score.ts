interface GreedIsGood {
  tracker: Record<string, number>;
  score: number;
}

const updateGreedIsGood = (
  greedIsGood: GreedIsGood,
  number: number,
  value: number,
  isThree = false
) => ({
  tracker: {
    ...greedIsGood.tracker,
    [number]: isThree
      ? 0
      : greedIsGood.tracker[number]
      ? greedIsGood.tracker[number] + 1
      : 1,
  },
  score: greedIsGood.score + value,
});

const threePoints: Record<number, number> = {
  1: 800,
  2: 200,
  3: 300,
  4: 400,
  5: 400,
  6: 600,
};

const points: Record<number, number> = {
  1: 100,
  2: 0,
  3: 0,
  4: 0,
  5: 50,
  6: 0,
};

export const score = (rolls: number[]) =>
  rolls.reduce(
    (acc: GreedIsGood, curr) =>
      acc.tracker[curr] === 2
        ? updateGreedIsGood(acc, curr, threePoints[curr], true)
        : updateGreedIsGood(acc, curr, points[curr]),
    { tracker: {}, score: 0 }
  ).score;
