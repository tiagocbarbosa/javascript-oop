import { Employee } from './Employee.js'

export class Manager extends Employee {
    constructor(name, salary, cpf) {
        super(name, salary, cpf)
        this._bonus = 1.1
    }
}
