import { Account } from "./account";

describe("Account", () => {
  let spyLog: any;

  beforeEach(() => {
    spyLog = jest.spyOn(global.console, "log");
  });

  describe("without any transaction", () => {
    it("should print Date || Amount || Balance initialy", () => {
      const account = new Account();

      account.printStatement();

      expect(spyLog).toHaveBeenCalledWith("Date || Amount || Balance\n\n");
    });
  });

  describe("deposit", () => {
    it("should enable the client to to make a deposit", () => {
      const account = new Account();

      account.deposit(500, new Date(2014, 0, 1)).printStatement();

      expect(spyLog).toHaveBeenCalledWith(
        "Date || Amount || Balance\n\n1.1.2014 || +500 || 500"
      );
    });

    it("should enable the client to make several deposit", () => {
      const account = new Account();

      account
        .deposit(500, new Date(2014, 0, 1))
        .deposit(500, new Date(2015, 2, 14))
        .printStatement();

      expect(spyLog).toHaveBeenCalledWith(
        "Date || Amount || Balance\n\n1.1.2014 || +500 || 500\n\n14.3.2015 || +500 || 1000"
      );
    });

    it("should not do any transaction when the amount is less than 0.1", () => {
      const account = new Account();
      account
        .deposit(0, new Date(2014, 0, 1))
        .deposit(0.05, new Date(2014, 0, 1))
        .printStatement();

      expect(spyLog).toHaveBeenCalledWith("Date || Amount || Balance\n\n");
    });
  });

  describe("withdraw", () => {
    it("should enable the client to make a withdrawal", () => {
      const account = new Account();
      account.wihdraw(500, new Date(2014, 0, 1)).printStatement();

      expect(spyLog).toHaveBeenCalledWith(
        "Date || Amount || Balance\n\n1.1.2014 || -500 || -500"
      );
    });

    it("should enable the client to make several withdrawals ", () => {
      const account = new Account();
      account
        .wihdraw(500, new Date(2014, 0, 1))
        .wihdraw(500, new Date(2015, 0, 1))
        .printStatement();

      expect(spyLog).toHaveBeenCalledWith(
        "Date || Amount || Balance\n\n1.1.2014 || -500 || -500\n\n1.1.2015 || -500 || -1000"
      );
    });

    it("should not do any withdraw when the amount is less than 0.1", () => {
      const account = new Account();
      account
        .wihdraw(0, new Date(2014, 0, 1))
        .wihdraw(0.05, new Date(2014, 0, 1))
        .printStatement();

      expect(spyLog).toHaveBeenCalledWith("Date || Amount || Balance\n\n");
    });
  });

  describe("acceptance test", () => {
    it("should pass the acceptance test", () => {
      const account = new Account();

      account
        .deposit(500, new Date(2015, 11, 24))
        .wihdraw(100, new Date(2016, 7, 23))
        .printStatement();

      expect(spyLog).toHaveBeenCalledWith(
        "Date || Amount || Balance\n\n24.12.2015 || +500 || 500\n\n23.8.2016 || -100 || 400"
      );
    });
  });
});
