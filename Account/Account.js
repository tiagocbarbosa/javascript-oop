import { Client } from '../Client/Client.js'

export class Account {

    // *** Accessors ***

    get client() {
        return this.client
    }
    
    set client(newClient) {
        if(newClient instanceof Client) {
            this._client = newClient
        }
    }

    get balance() {
        return this._balance
    }
    
    // *** Methods ***

    constructor(initialBalance, client, agency) {
        if(this.constructor == Account) {
            throw new Error('You cannot initialize an Abstract class of the type Account')
        }

        this._balance = initialBalance
        this.client = client
        this.agency = agency

        // in the code below you can check a proposal for private fields using '#'
        // this.#balance = initialBalance (https://github.com/tc39/proposal-class-fields#private-fields)
    }
    
    // Abstract method
    withdraw(value) {
        // I'm launching an error if this method is not overwritten
        throw new Error('Abstract methods must be overwritten')
    }

    _withdraw(value, tax) {
        const amountDrawn = value * tax
        if(this._balance >= amountDrawn) {
            this._balance -= amountDrawn
            return amountDrawn
        }

        return 0
    }

    deposit(value) {
        if(value <= 0) { return }
        this._balance += value
    }

    transfer(value, account) {
        const amountDrawn = this.withdraw(value)
        account.deposit(amountDrawn)
    }
}
