export class Employee {
    
    // *** Methods ***

    constructor(name, salary, cpf) {
        this._name = name
        this._salary = salary
        this._cpf = cpf

        this._bonus = 1
        this._password
    }

    authenticate(password) {
        return password == this._password
    }

    registerPassword(password) {
        this._password = password
    }
}
