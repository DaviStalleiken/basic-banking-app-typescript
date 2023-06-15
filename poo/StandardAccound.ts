export abstract class StandardAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso.') 
    }

    getName = ():string => {
        return this.name
    }

    deposit = (): number => {
        if(this.validateStatus()) {
            console.log('Depósito efetuado.')
        }

        //O método acresce 10 a mais que o originalmente depoistado
        return this.balance + 10
    }

    withdraw = () => {
        console.log('Saque efetuado.')
        //Valor de saque deve ser alterado de acordo com o valor informado para depósito
        //Apenas contas com status true e saldo maior que o solicitado podem fazer saques
        if(this.status && this.balance > 0) {
            //TODO
        }
    }

    getBalance = ():void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 
        throw new Error('Conta inválida')
    }
}
