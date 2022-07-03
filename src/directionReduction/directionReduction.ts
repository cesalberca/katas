const verifyDirections = (fDir: string, sDir: string | undefined): boolean => {
  if (fDir === "NORTH" && sDir === "SOUTH") return true;
  if (fDir === "SOUTH" && sDir === "NORTH") return true;
  if (fDir === "EAST" && sDir === "WEST") return true;
  if (fDir === "WEST" && sDir === "EAST") return true;
  return false;
};

interface Obj {
  skip: boolean;
  dirs: string[];
}

export function dirReduc(arr: string[], sameLength = false): string[] {
  if (sameLength) return arr;
  const result = arr.reduce(
    (obj: Obj, dir, i) => {
      if (obj.skip) return { ...obj, skip: false };
      if (verifyDirections(dir, arr[i + 1])) return { ...obj, skip: true };
      return { skip: obj.skip, dirs: [...obj.dirs, dir] };
    },
    { skip: false, dirs: [] }
  ).dirs;

  return dirReduc(result, arr.length === result.length);
}
