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
  myDrone,
  createRobot,
  lensProp,
  view,
  set,
  over,
  toArray,
  getFriendsNearMe,
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

  describe("factory function for mixin composition", () => {
    it("should be flying", () => {
      expect(myDrone.fly().isFlying()).toBe(true);
    });

    it("should be landed", () => {
      expect(myDrone.fly().land().isFlying()).toBe(false);
    });

    it("should get 5500mAh for the capacity of the Drone", () => {
      expect(myDrone.getCapacity()).toBe("5500mAh");
    });

    it("should have 100% of battery", () => {
      expect(myDrone.getCharge()).toBe(100);
    });

    it("should decerease the battery of 50%", () => {
      expect(myDrone.draw(50).getCharge()).toBe(50);
    });

    it("should acelerate its speed to zero to 50km", () => {
      const myRobot = createRobot({ capacity: "400mAh" });
      expect(myRobot.accelarate(50).getSpeed()).toBe(50);
    });

    it("should be initially 500mAh", () => {
      const myRobot = createRobot({ capacity: "500mAh" });
      expect(myRobot.getCapacity()).toBe("500mAh");
    });

    it("accelarates 50km and then break by 20km", () => {
      const myRobot = createRobot({ capacity: "400mAh" });
      expect(myRobot.accelarate(50).break(30).getSpeed()).toBe(20);
    });

    it("should not break under zero km", () => {
      const myRobot = createRobot({ capacity: "400mAh" });
      expect(myRobot.break(30).getSpeed()).toBe(0);
    });

    describe("Lens", () => {
      it("should view foo", () => {
        const aLens = lensProp("a");
        const fooStore = { a: "foo", b: "bar" };
        expect(view(aLens, fooStore)).toBe("foo");
      });

      it("should set foo to bar", () => {
        const aLens = lensProp("a");
        const fooStore = { a: "foo" };
        expect(set(aLens, "bar", fooStore)).toEqual({ a: "bar" });
      });

      it("should multiple the foo properties by 2 so be 4", () => {
        const FooLens = lensProp("foo");
        const store = { foo: 2 };
        expect(over(FooLens, (x: number) => x * 2, store)).toEqual({ foo: 4 });
      });
    });

    describe("Transducers", () => {
      it("should be an array of name of the signer tha are near me", () => {
        const friends = [
          { id: 1, name: "Sting", nearMe: true },
          { id: 2, name: "Radiohead", nearMe: true },
          { id: 3, name: "NIN", nearMe: false },
          { id: 4, name: "Echo", nearMe: true },
          { id: 5, name: "Zeppelin", nearMe: false },
        ];

        expect(toArray(getFriendsNearMe, friends)).toEqual([
          "Sting",
          "Radiohead",
          "Echo",
        ]);
      });
    });
  });
});
