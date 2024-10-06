import { Account } from "./Account.js";

export class CurrentAccount extends Account {

  static numberAccountCreated = 0;

  constructor(client, bankBranch){

    super(100, client, bankBranch);

    CurrentAccount.numberAccountCreated ++;
  };

  // Override "withdrawMoney" method
  withdrawMoney(value){
    let tax = 1.1;
    return this._withdrawMoney(value, tax);
  };

};
