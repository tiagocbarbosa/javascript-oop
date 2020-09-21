export class Client {

    // *** Accessors ***

    get cpf() {
        return this._cpf
    }

    // *** Methods ***

    constructor(name, cpf, password) {
        this.name = name // public property
        this._cpf = cpf // private property
        this._password = password
    }
}
