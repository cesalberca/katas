export class G964 {
  public static inArray = (a1: string[], a2: string[]): string[] =>
    a1.filter((str) => a2.some((str2) => str2.includes(str))).sort();
}
