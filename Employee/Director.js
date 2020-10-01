import { Employee } from './Employee.js'

export class Director extends Employee {

    // *** Methods ***
    
    constructor(name, salary, cpf) {
        super(name, salary, cpf)
        this._bonus = 2
    }
}
