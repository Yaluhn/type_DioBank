import { DioAccount } from "./Account";

export class CompanyAccount extends DioAccount{
    private cnpj: number;


    constructor(cnpj: number, name: string, accountNumber: number){
        super(name, accountNumber);
        this.cnpj = cnpj;
    }

    getCnpj(){
        return this.cnpj;
    }

    getLoan(valor: number) : void{
        const emprestimo: number = this.getBalance() + valor;
        if (this.getStatus()){
        console.log ("O valor permitido para empréstimo é: " + emprestimo);
        } else {
            console.log("Conta inválida");
        }
    }
}