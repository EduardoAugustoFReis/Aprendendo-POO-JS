import { BankClient } from "./BankClient.js"; 

export class CurrentAccount {

  static numberAccountCreated = 0;
  bankBranch; // agencia
  
  _client;
  _bankBalance = 0; // #saldo = 0 | private field "_xxx";

  set client(newValue){
    if(newValue instanceof BankClient) {
      this._client = newValue;
    };
  };

  get client(){
    return this._client;
  };
  
  get bankBalance(){
    return this._bankBalance;
  };

  constructor(bankBranch, client){
    this.bankBranch = bankBranch;
    this.client = client;
    CurrentAccount.numberAccountCreated ++;
  }

  withdrawMoney(value){
    if(this._bankBalance <= value ) {
      console.log(`Operation denied. You don't have enough balance, your current balance is ${this._bankBalance} R$.`);
      return;
    };

    this._bankBalance -= value;
    console.log("Amount withdrawn: " + value + " R$");
    return value; 
  };

  deposit(value){
    if(value <= 0 ){
      return;
    };
    
    this._bankBalance += value;
    return console.log("Amount deposit: " + value + " R$");
  };

  transfer(value, clientAccount){
   const valueWithdraw = this.withdrawMoney(value);
   
   if(valueWithdraw){
    clientAccount.deposit(valueWithdraw);
    console.log(`Transferred ${value} R$ to ${clientAccount.client.name}`)
   } else {
    console.log("Transfer failed due to insufficient balance.");
   }

  };

};
