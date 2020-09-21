import { Account } from './Account.js'

export class CheckingAccount extends Account {
    
    // *** Attributes ***
    
    static accountsNumber = 0
    
    // *** Methods ***

    constructor(client, agency) {
        super(0, client, agency)
        CheckingAccount.accountsNumber += 1
    }
}
