export class Account {
    constructor(initialBalance, client, agency) {
        this._balance = initialBalance
        // here it's a proposal to a private property
        //this.#balance = initialBalance (https://github.com/tc39/proposal-class-fields#private-fields)
        this.client = client
        this.agency = agency
    }
}
