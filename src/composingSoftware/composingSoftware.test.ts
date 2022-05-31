import {
  add3,
  inc,
  double,
  add,
  filterNumber,
  censor,
  startWithS,
  gte3,
  add2,
  incBy1,
  incBy20,
  compose,
  trace,
  pipe,
  authUser,
} from "./composingSoftware";

describe("currying", () => {
  it("should add 3 numbers together", () => {
    expect(add3(1, 2, 3)).toBe(6);
    expect(add3(1)(2, 3)).toBe(6);
    expect(add3(1)(2)(3)).toBe(6);
  });

  it("should add two numbers together", () => {
    expect(add2(3)(4)).toBe(7);
  });
});

describe("function composition", () => {
  it("should double numbers and then increment it", () => {
    expect(inc(double(2))).toBe(5);
    expect(inc(double(2) * double(2))).toBe(17);
  });

  describe("higher order function", () => {
    it("should add number together", () => {
      expect(add([1, 2, 3])).toBe(6);
    });

    it("should filter all the number in the list", () => {
      expect(filterNumber([1, "1"])).toEqual([1]);
    });

    it("should filter out any word that has a length of 4", () => {
      expect(censor(["blabla", "tree"])).toEqual(["blabla"]);
    });

    it("should filter outll the word that starts with s", () => {
      expect(startWithS(["salameche", "carapuce"])).toEqual(["salameche"]);
    });

    it("should filter ou any number inferior to 3", () => {
      expect([1, 2, 3, 4].filter(gte3)).toEqual([3, 4]);
    });
  });

  describe("point-free style", () => {
    it("should increment a number by one", () => {
      expect(incBy1(5)).toBe(6);
    });

    it("should increment a number by 20", () => {
      expect(incBy20(5)).toBe(25);
    });
  });

  describe("compose", () => {
    it("should double numbers and then increment it", () => {
      expect(compose(inc, double)(6)).toBe(13);
    });

    it("should log each steps of the composition", () => {
      expect(
        compose(trace("after inc"), inc, trace("after double"), double)(6)
      ).toBe(13);
    });
  });

  describe("pipe", () => {
    it("should double numbers and then increment it", () => {
      expect(pipe(double, inc)(6)).toBe(13);
    });
  });

  describe("compose Promises", () => {
    it("should authorize the user", async () => {
      expect(await authUser(3)).toBe(true);
    });
  });
});
