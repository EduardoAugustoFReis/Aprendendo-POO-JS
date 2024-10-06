import { Account } from "./Account.js";

export class SalatyAccount extends Account {

  constructor(client){
    super(0,this.client, 100);
  };

  withdrawMoney(value){
    const tax = 1.01;
    return this._withdrawMoney(value, tax);
  };

}