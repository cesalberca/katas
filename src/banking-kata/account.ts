interface Transaction {
  date: Date;
  amount: number;
  balance: number;
}

export class Account {
  private _balance: number;

  private _transaction: Transaction[];

  constructor() {
    this._balance = 0;
    this._transaction = [];
  }

  private formatDate(date: Date): string {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  private displaySign(amount: number): string {
    return amount > 0 ? "+" : "";
  }

  private displayTransaction(transaction: Transaction[]): string {
    return transaction
      .map(
        ({ date, amount, balance }: Transaction) =>
          `${this.formatDate(date)} || ${this.displaySign(
            amount
          )}${amount} || ${balance}`
      )
      .join("\n\n");
  }

  private isNotEnough(amount: number): boolean {
    return amount < 0.1;
  }

  private updateTransaction(date: Date, amount: number, balance: number) {
    this._transaction = [...this._transaction, { date, amount, balance }];
  }

  public deposit(int: number, date = new Date()): this {
    if (this.isNotEnough(int)) return this;
    this._balance += int;
    this.updateTransaction(date, int, this._balance);
    return this;
  }

  public wihdraw(int: number, date = new Date()): this {
    if (this.isNotEnough(int)) return this;
    this._balance -= int;
    this.updateTransaction(date, -int, this._balance);
    return this;
  }

  public printStatement(): void {
    console.log(
      `Date || Amount || Balance\n\n${this.displayTransaction(
        this._transaction
      )}`
    );
  }
}
