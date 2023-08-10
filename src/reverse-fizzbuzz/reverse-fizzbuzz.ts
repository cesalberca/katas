const WhenUnknown = (arr: string[], i: number) => {
  if (arr[i - 1] && Number(arr[i - 1]).toString() !== "NaN")
    return Number(arr[i - 1]) + 1;

  if (arr[i + 1] && Number(arr[i + 1]).toString() !== "NaN")
    return Number(arr[i + 1]) - 1;

  if (arr[i + 1] && Number(arr[i + 1]).toString() === "NaN")
    return Number(arr[i + 2]) - 2;

  return Number(arr[i - 2]) + 2;
};

export function reverseFizzBuzz(s: string): (number | undefined)[] {
  if (s === "Fizz") return [3];
  if (s === "Buzz") return [5];
  if (s === "FizzBuzz") return [15];
  if (s === "Fizz Buzz") return [9, 10];
  if (s === "Buzz Fizz") return [5, 6];

  return s.split(" ").map((num, i, arr) => {
    if (["Fizz", "Buzz", "FizzBuzz"].includes(num)) return WhenUnknown(arr, i);

    return +num;
  });
}
