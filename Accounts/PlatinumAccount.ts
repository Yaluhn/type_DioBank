import { DioAccount } from "./Account";

export class PlatinumAccount extends DioAccount{

    deposit(amount: number): void{
        let newBalance: number
        if (this.getStatus()){
            newBalance = this.getBalance() + amount + 10;
        console.log("Você depositou R$" + amount + " na conta de " + this.getName() + " e ganhou R$10 de bônus");
        } else {
            newBalance = this.getBalance();
        }

        this.setBalance(newBalance);
    }

}