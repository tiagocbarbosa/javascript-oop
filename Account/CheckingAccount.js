import { Account } from './Account.js'

export class CheckingAccount extends Account {
    
    // *** Attributes ***
    
    static accountsNumber = 0
    
    // *** Methods ***

    constructor(client, agency) {
        super(0, client, agency)
        CheckingAccount.accountsNumber += 1
    }

    // overwriting the abstract method
    withdraw(value) {
        const tax = 1.1
        return this._withdraw(value, tax)
    }
}
