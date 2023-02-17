import { PeopleAccount } from "./Accounts/PeopleAccount";
import { CompanyAccount } from "./Accounts/CompanyAccount";
import { PlatinumAccount } from "./Accounts/PlatinumAccount";

let account: PeopleAccount = new PeopleAccount(123456789, "John Doe", 12345);

let accountSA: CompanyAccount = new CompanyAccount(987654321000123, "Nempeixe", 54321);

let accountPA: PlatinumAccount = new PlatinumAccount("Mary Joanne", 22334455123);

account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

accountSA.deposit(100);
accountSA.withdraw(50);
accountSA.getLoan(100);
console.log(accountSA.getBalance());

accountPA.deposit(100);
accountPA.withdraw(50);
console.log(accountPA.getBalance());

account.deposit(10);
account.withdraw(50);
console.log(account.getBalance());

accountSA.deposit(10);
accountSA.withdraw(50);
accountSA.getLoan(100);
console.log(accountSA.getBalance());

accountPA.deposit(10);
accountPA.withdraw(50);
console.log(accountPA.getBalance());


// console.log(account);
// console.log(accountSA);
// console.log(accountPA);