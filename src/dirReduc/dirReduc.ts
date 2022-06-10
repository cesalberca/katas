export function dirReduc(arr: string[], length = 0): string[] {
  if (length === arr.length) return arr;
  const path = arr.filter((direction, i, paths) => {
    if (
      (direction === "NORTH" && paths[i + 1] === "SOUTH") ||
      (direction === "SOUTH" && paths[i + 1] === "NORTH")
    ) {
      return false;
    }

    if (
      (direction === "SOUTH" &&
        paths[i - 1] === "NORTH" &&
        paths[i - 2] !== "SOUTH") ||
      (direction === "NORTH" &&
        paths[i - 1] === "SOUTH" &&
        paths[i - 2] !== "NORTH")
    ) {
      return false;
    }

    if (
      (direction === "EAST" && paths[i + 1] === "WEST") ||
      (direction === "WEST" && paths[i + 1] === "EAST")
    ) {
      return false;
    }

    if (
      (direction === "WEST" &&
        paths[i - 1] === "EAST" &&
        paths[i - 2] !== "WEST") ||
      (direction === "EAST" &&
        paths[i - 1] === "WEST" &&
        paths[i - 2] !== "EAST")
    ) {
      return false;
    }

    return true;
  });

  return dirReduc(path, arr.length);
}
