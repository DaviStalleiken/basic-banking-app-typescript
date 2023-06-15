import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log('Empréstimo efetuado.')
        //O valor do saldo deve ser acrescido de acordo com o valor informado para empréstimo
        //Apenas contas com status true podem fazer empréstimos
    }

    deposit = ():number => {
        return 2
    }
}