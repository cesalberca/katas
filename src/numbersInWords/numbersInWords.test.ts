import { numbersInWords } from "./numbersInWords";

describe("numbersInWords", () => {
  it("should zero for 0", () => {
    expect(numbersInWords(0)).toBe("zero");
  });

  it("should be one for 1", () => {
    expect(numbersInWords(1)).toBe("one");
  });

  it("should be two for 2", () => {
    expect(numbersInWords(2)).toBe("two");
  });

  it("should be two for 3", () => {
    expect(numbersInWords(3)).toBe("three");
  });

  it("should be four for 4", () => {
    expect(numbersInWords(4)).toBe("four");
  });

  it("should be five for 5", () => {
    expect(numbersInWords(5)).toBe("five");
  });

  it("should be five for 5", () => {
    expect(numbersInWords(5)).toBe("five");
  });

  it("should be six for 6", () => {
    expect(numbersInWords(6)).toBe("six");
  });

  it("should be seven for 7", () => {
    expect(numbersInWords(7)).toBe("seven");
  });

  it("should be eight for 8", () => {
    expect(numbersInWords(8)).toBe("eight");
  });

  it("should be eight for 9", () => {
    expect(numbersInWords(9)).toBe("nine");
  });

  it("should be eight for 10", () => {
    expect(numbersInWords(10)).toBe("ten");
  });
  it("should be eleven for 11", () => {
    expect(numbersInWords(11)).toBe("eleven");
  });

  it("should be eleven for 12", () => {
    expect(numbersInWords(12)).toBe("twelve");
  });

  it("should be eleven for 13", () => {
    expect(numbersInWords(13)).toBe("thirteen");
  });

  it("should be eleven for 14", () => {
    expect(numbersInWords(14)).toBe("fourteen");
  });

  it("should be eleven for 15", () => {
    expect(numbersInWords(15)).toBe("fiveteen");
  });

  it("should be eighteen fro 18", () => {
    expect(numbersInWords(18)).toBe("eighteen");
  });

  it("should be twenty for 20", () => {
    expect(numbersInWords(20)).toBe("twenty");
  });

  it("should be twenty one for 21", () => {
    expect(numbersInWords(21)).toBe("twenty-one");
  });

  it("should be twenty two for 22", () => {
    expect(numbersInWords(22)).toBe("twenty-two");
  });

  it("should be twenty two for 30", () => {
    expect(numbersInWords(30)).toBe("thirty");
  });

  it("should be thirty for 34", () => {
    expect(numbersInWords(34)).toBe("thirty-four");
  });

  it("should be fourty-four for 44", () => {
    expect(numbersInWords(44)).toBe("forty-four");
  });

  it("should be fourty-four for 50", () => {
    expect(numbersInWords(50)).toBe("fifty");
  });

  it("should be sixty for 60", () => {
    expect(numbersInWords(60)).toBe("sixty");
  });

  it("should be one hundred for 100", () => {
    expect(numbersInWords(100)).toBe("one hundred");
  });

  it("should be one hundred  1", () => {
    expect(numbersInWords(101)).toBe("one hundred one");
  });

  it("should be seven hundred fourty-five for 745", () => {
    expect(numbersInWords(745)).toBe("seven hundred forty-five");
  });

  it("should be 1 thousand for 1000", () => {
    expect(numbersInWords(1000)).toBe("one thousand");
  });

  it("should be one thousand two for 1002", () => {
    expect(numbersInWords(1002)).toBe("one thousand two");
  });

  it("should be eight thousand three hundred thirty for 8330", () => {
    expect(numbersInWords(8330)).toBe("eight thousand three hundred thirty");
  });

  it("should be ten thousand for 10 000", () => {
    expect(numbersInWords(10000)).toBe("ten thousand");
  });

  it("should be ninety-nine thousand nine hundred ninety-nine for 99999", () => {
    expect(numbersInWords(99999)).toBe(
      "ninety-nine thousand nine hundred ninety-nine"
    );
  });

  it("should be eight hundred eighty-eight thousand eight hundred eighty-eight for 888888", () => {
    expect(numbersInWords(888888)).toBe(
      "eight hundred eighty-eight thousand eight hundred eighty-eight"
    );
  });
});
