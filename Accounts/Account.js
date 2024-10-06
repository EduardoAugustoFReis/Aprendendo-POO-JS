import { BankClient } from "../Employees/BankClient.js"; 

// abstract class
export class Account {

  constructor(initialBankBalance, client, bankBranch){
    
    if(this.constructor === Account){
      throw new Error("You don't must create instance of Account class, because it's an abstract class.");
    };

    this._bankBalance = initialBankBalance;
    this._client = client;
    this._bankBranch = bankBranch;
  };

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

  // abstract method 
  withdrawMoney(value){
    throw new Error("Withdraw money from Account class, is abstract");
  };

  _withdrawMoney(value, tax){
    const valueWithdraw = tax * value;

    if(this._bankBalance <= valueWithdraw ) {
      console.log(`Operation denied. You don't have enough balance, your current balance is ${this._bankBalance} R$.`);
      return;
    };

    this._bankBalance -= (valueWithdraw).toFixed(2);
    console.log(`Amount withdrawn: ${valueWithdraw.toFixed(2)} R$. Your current balance is ${this._bankBalance} R$`);
    return valueWithdraw; 
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
