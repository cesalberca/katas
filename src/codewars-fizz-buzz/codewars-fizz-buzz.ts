export const fizzbuzz = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1).map((number) => {
    if (number % 15 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;
  });
