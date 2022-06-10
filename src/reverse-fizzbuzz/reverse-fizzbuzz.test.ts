import { reverseFizzBuzz } from "./reverse-fizzbuzz";

describe("reverse-fizzbuzz", () => {
  it("should tranfsorm a string into a list of numbers with one number", () => {
    expect(reverseFizzBuzz("1")).toEqual([1]);
  });

  it("should tranfsorm a string into a list of numbers with one number and be another number", () => {
    expect(reverseFizzBuzz("2")).toEqual([2]);
  });

  it("should tranfsorm a string into a list of numbers with multiple numbers ", () => {
    expect(reverseFizzBuzz("1 2")).toEqual([1, 2]);
  });

  it("should tranfsorm a string into a list number when there is Fizz", () => {
    expect(reverseFizzBuzz("1 2 Fizz")).toEqual([1, 2, 3]);
  });

  it("should tranfsorm a string into a list number when there is Buzz", () => {
    expect(reverseFizzBuzz("1 2 Fizz 4 Buzz")).toEqual([1, 2, 3, 4, 5]);
  });

  it("should tranfsorm a string into a list number when there is Fizz and it's not 3", () => {
    expect(reverseFizzBuzz("7 8 Fizz")).toEqual([7, 8, 9]);
  });

  it("should tranfsorm a string into a list number when the string start with a Fizz", () => {
    expect(reverseFizzBuzz("Fizz 4 Buzz")).toEqual([3, 4, 5]);
  });

  it("should tranfsorm a string into a list number when there is Buzz and it's not 5", () => {
    expect(reverseFizzBuzz("19 Buzz")).toEqual([19, 20]);
  });

  it("should tranfsorm a string into a list number when the string start with a Buzz", () => {
    expect(reverseFizzBuzz("Buzz 11")).toEqual([10, 11]);
  });

  it("should handle FizzBuzz", () => {
    expect(reverseFizzBuzz("14 FizzBuzz")).toEqual([14, 15]);
  });

  it("should handle FizzBuzz when it is not 15", () => {
    expect(reverseFizzBuzz("29 FizzBuzz")).toEqual([29, 30]);
  });

  it("should handle when there is no nuumber before FizzBuzz", () => {
    expect(reverseFizzBuzz("FizzBuzz 31")).toEqual([30, 31]);
  });

  it("should handle when there is just Fizz in the string", () => {
    expect(reverseFizzBuzz("Fizz")).toEqual([3]);
  });

  it("should handle when there is just Fizz in the string", () => {
    expect(reverseFizzBuzz("Buzz")).toEqual([5]);
  });

  it("should handle when there is just FizzBuzz in the string", () => {
    expect(reverseFizzBuzz("FizzBuzz")).toEqual([15]);
  });

  it("should handle when there is just Fizz Buzz in the string", () => {
    expect(reverseFizzBuzz("Fizz Buzz")).toEqual([9, 10]);
  });

  it("should handle when there is just Buzz Fizz", () => {
    expect(reverseFizzBuzz("Buzz Fizz")).toEqual([5, 6]);
  });

  it("should handle when there is consecutive Fizz Buzz in the string", () => {
    expect(reverseFizzBuzz("Fizz Buzz 11")).toEqual([9, 10, 11]);
  });

  it("should handle the case when there is consecutive Fizz Buzz at the end", () => {
    expect(reverseFizzBuzz("8 Fizz Buzz")).toEqual([8, 9, 10]);
  });
});
