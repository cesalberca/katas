import { longestRepetition } from "./longestRepetition";

describe("longestRepetion", () => {
  it("should be 1 empty string for empty string ", () => {
    expect(longestRepetition("")).toEqual(["", 0]);
  });

  it("should be 1 c for c as string", () => {
    expect(longestRepetition("c")).toEqual(["c", 1]);
  });

  it("should be 2 c for cc as string", () => {
    expect(longestRepetition("cc")).toEqual(["c", 2]);
  });

  it("should be 2 c for cca as string", () => {
    expect(longestRepetition("cca")).toEqual(["c", 2]);
  });

  it("should be 2 c for acc as string", () => {
    expect(longestRepetition("acc")).toEqual(["c", 2]);
  });

  it("should restart the count when the repetion is broken", () => {
    expect(longestRepetition("bbbaaabaaaa")).toEqual(["a", 4]);
  });

  it("should handle the case when 2 repetion ", () => {
    expect(
      longestRepetition(
        "a7y9t9gy5vy9g8tbzqw6fxu1ttxgtoy1v3t98o3gk0swywxlpqcuy3umxogrm4tch2kz1jr6l3g67byv5rvl22nqh7osvrru7qh0qh4p8mciuvav3lanwusshudhy9y7p7puhstbwk0b87qqd48rf3k7mn38hgwtxl32twzh2hvb3hghytpjw5ejza5wc5fiwbwgj78tqxn5vjtc4249m3sp7yqjsbxt9lo9iw0j8wjogpkzgs3bn9gfdeq8ic52zoin2w14stsuv4j95lkkygcj5lz8dva9si40swmzgyv3b582yxq25elys2xf5huvxz3ckf3fuisxwebubo52bgydwhzup81loy3uswrgph02y8cwbtqagfbszzwr34rgzubxhb883te21bzdpandakzdy2bbupdhiyxpfh9cdk6dpw75vmpa0ikf8yu8lq5rpk2xk1eh9ld19m0rigftoftsuhpb98pcfx8ibweeyrrmmce2q18z"
      )
    ).toEqual(["t", 2]);
  });
});
