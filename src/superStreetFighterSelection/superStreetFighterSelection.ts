interface GameParams {
  fighters: string[][];
  hovered: string[];
  position: [number, number];
}

const moveRight = (
  [column, row]: [number, number],
  fighters: string[][]
): [number, number] => {
  if (fighters[column][row + 1] === "")
    return moveRight([column, row + 1], fighters);
  if (fighters[column].length - 1 === row && fighters[column][0] !== "")
    return [column, 0];
  if (fighters[column].length - 1 === row && fighters[column][0] === "")
    return moveRight([column, 0], fighters);
  return [column, row + 1];
};

const moveLeft = (
  [column, row]: [number, number],
  fighters: string[][]
): [number, number] => {
  if (fighters[column][row - 1] === "")
    return moveLeft([column, row - 1], fighters);
  if (row === 0 && fighters[column][fighters[column].length - 1] !== "")
    return [column, fighters[column].length - 1];
  if (row === 0 && fighters[column][fighters[column].length - 1] === "")
    return moveLeft([column, fighters[column].length - 1], fighters);
  return [column, row - 1];
};

const moveUp = (
  [column, row]: [number, number],
  fighters: string[][]
): [number, number] => {
  if (column === 0) return [column, row];

  if (fighters[column - 1][row] === "") return [column, row];
  return [column - 1, row];
};

const moveDown = (
  [column, row]: [number, number],
  fighters: string[][]
): [number, number] => {
  if (column === fighters.length - 1) return [column, row];
  if (fighters[column + 1][row] === "") return [column, row];
  return [column + 1, row];
};

const updateSelection = (obj: any, fn: any) => ({
  position: fn(obj.position, obj.fighters),
  fighters: obj.fighters,
  hovered: [
    ...obj.hovered,
    obj.fighters[fn(obj.position, obj.fighters)[0]][
      fn(obj.position, obj.fighters)[1]
    ],
  ],
});

export const superStreetFighterSelection = (
  fighters: Array<string[]>,
  position: [number, number],
  moves: string[]
) =>
  moves.reduce(
    (obj: GameParams, move) => {
      if (move === "right") return (obj = updateSelection(obj, moveRight));
      if (move === "left") return (obj = updateSelection(obj, moveLeft));
      if (move === "up") return (obj = updateSelection(obj, moveUp));
      return (obj = updateSelection(obj, moveDown));
    },
    { fighters, position, hovered: [] }
  ).hovered;
