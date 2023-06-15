/* class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User('Davi', 28)
user.showName()

const otherUser: User = new User('Débora', 27)
otherUser.showName() */

//Abstração, Herança e Polimorfismo

//DIO Banking

import { DioAccount } from "./DioAccount"
import { PeopleAccount } from "./PeopleAccount"
import { CompanyAccount } from "./CompanyAccount"

class Admin extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)     
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Davi', 10)
console.log(peopleAccount)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit() 
