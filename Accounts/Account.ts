export abstract class DioAccount{
    private name: string;
    private accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit(amount: number): void{
        if (this.validateStatus()){
        this.balance += amount;
        console.log("Você depositou R$" + amount + " na conta de " + this.name);
        }
    }

    withdraw(amount: number): void{
        if (this.validateStatus() && this.balance >= amount){
            this.balance -= amount;
            console.log("Você sacou R$" + amount + " da conta de " + this.name);
        } else if (this.validateStatus()){
            console.log("Saldo insuficiente para saque" + " seu saldo é de R$" + this.balance);
        }
    }

    getBalance = ():number => {
        return this.balance;
    }

    setBalance = (amount: number):void => {
        this.balance += amount;
    }

    getName = ():string => {
        return this.name;
    }

    getAccountNumber = ():number => {
        return this.accountNumber;
    }

    private validateStatus = ():boolean => {
        if (this.status){
            return true;
        }
        throw new Error("Conta inválida");
    }

    getStatus = ():boolean => {
        return this.status;
    }
}