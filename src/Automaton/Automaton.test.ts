import { Automaton, AutomatonInterface } from "./Automaton";

describe("Automaton", () => {
  let myAutomaton: AutomatonInterface;
  beforeEach(() => {
    myAutomaton = new Automaton();
  });
  it('should be true for ["1"]', () => {
    expect(myAutomaton.readCommands(["1"])).toBe(true);
  });

  it('should be false for ["0"]', () => {
    expect(myAutomaton.readCommands(["0"])).toBe(false);
  });

  it('should be false for ["1", "0"]', () => {
    expect(myAutomaton.readCommands(["1", "0"])).toBe(false);
  });

  it('should be false for ["1", "0","1"]', () => {
    expect(myAutomaton.readCommands(["1", "0", "1"])).toBe(true);
  });

  it('should be false for ["1", "0","0"]', () => {
    expect(myAutomaton.readCommands(["1", "0", "0"])).toBe(true);
  });

  it("should pass teh acceptance tests", () => {
    expect(myAutomaton.readCommands(["1", "0", "0", "1"])).toBe(true);
  });

  it('should be false for ["0","0"]', () => {
    expect(myAutomaton.readCommands(["0", "0"])).toBe(false);
  });
});
