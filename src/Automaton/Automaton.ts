export interface AutomatonInterface {
  state: string[];
  readCommands(commands: string[]): boolean;
}

export class Automaton implements AutomatonInterface {
  state = ["q1"];

  public readCommands(commands: string[]): boolean {
    commands.forEach((str) => {
      if (this.state[this.state.length - 1] === "q1" && str === "1")
        return this.state.push("q2");
      if (this.state[this.state.length - 1] === "q2" && str === "0")
        return this.state.push("q3");
      if (
        this.state[this.state.length - 1] === "q3" &&
        ["1", "0"].includes(str)
      )
        return this.state.push("q2");
    });
    return this.state[this.state.length - 1] === "q2";
  }
}

export const myAutomaton = new Automaton();
