export const assembleString = (strarr: string[]) => {
  if (strarr.length === 0) return "";
  let result = "";
  for (let i = 0; result.length < strarr[0].length; i++) {
    const missingLetter = Array.from({ length: strarr.length }, (_, i) => i)
      .map((index) => strarr[index][i])
      .find((l) => l !== "*");

    result += missingLetter ? missingLetter : "#";
  }

  return result;
};
