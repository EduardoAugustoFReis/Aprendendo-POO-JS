import { Account } from "./Account.js";

export class SavingsAccount extends Account{

  constructor(initialBankBalance, client, bankBranch){

   super(initialBankBalance, client, bankBranch);
   
  };

  withdrawMoney(value){
    const tax = 1.02;
    return this._withdrawMoney(value, tax);
  }

}; 

