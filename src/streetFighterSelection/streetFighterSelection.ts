interface GameParams {
  position: [number, number];
  hovered: string[];
  fighters: string[][];
}

const moveRight = ([column, row]: [number, number]): [number, number] =>
  row === 5 ? [column, 0] : [column, row + 1];

const moveLeft = ([column, row]: [number, number]): [number, number] =>
  row === 0 ? [column, 5] : [column, row - 1];

const moveUp = ([column, row]: [number, number]): [number, number] =>
  column === 0 ? [column, row] : [column - 1, row];

const moveDown = ([column, row]: [number, number]): [number, number] =>
  column === 1 ? [column, row] : [column + 1, row];

const updateSelection = (
  obj: GameParams,
  fn: ([column, row]: [number, number]) => [number, number]
) => ({
  position: fn(obj.position),
  hovered: [
    ...obj.hovered,
    obj.fighters[fn(obj.position)[0]][fn(obj.position)[1]],
  ],
  fighters: obj.fighters,
});
export const streetFighterSelection = (
  fighters: Array<string[]>,
  position: [number, number],
  moves: string[]
): string[] =>
  moves.reduce(
    (obj: GameParams, move) => {
      if (move === "right") return (obj = updateSelection(obj, moveRight));
      if (move === "left") return (obj = updateSelection(obj, moveLeft));
      if (move === "up") return (obj = updateSelection(obj, moveUp));
      return (obj = updateSelection(obj, moveDown));
    },
    { position, hovered: [], fighters }
  ).hovered;
