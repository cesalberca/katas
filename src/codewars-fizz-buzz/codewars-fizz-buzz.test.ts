import { fizzbuzz } from "./codewars-fizz-buzz";

describe("fizz buzz", () => {
  it("should be when we received 1", () => {
    expect(fizzbuzz(1)).toEqual([1]);
  });

  it("should put in the list all the numbers before the number received", () => {
    expect(fizzbuzz(2)).toEqual([1, 2]);
  });

  it("should be Fizz instead of 3", () => {
    expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"]);
  });

  it("should be Buzz instead of 5", () => {
    expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  it("should be Fizz instead of all the numbers divisible by 3", () => {
    expect(fizzbuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
  });

  it("should be Buzz instead of all the numbers divisible by 5", () => {
    expect(fizzbuzz(10)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
    ]);
  });

  it("should be FizzBuzz instead of 15", () => {
    expect(fizzbuzz(15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });

  it("should be FizzBuzz instead of all the numbers that are divisible by 15", () => {
    expect(fizzbuzz(30)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
      17,
      "Fizz",
      19,
      "Buzz",
      "Fizz",
      22,
      23,
      "Fizz",
      "Buzz",
      26,
      "Fizz",
      28,
      29,
      "FizzBuzz",
    ]);
  });
});
