import { BankClient } from "./BankClient.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client = new BankClient("Alex", "999999999-99");
const client2 = new BankClient("Alice", "000000000-00");

const account = new CurrentAccount(301, client);
const account2 = new CurrentAccount(101, client2);

console.log(CurrentAccount.numberAccountCreated);
