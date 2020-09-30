import { Client } from './Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { Employee } from './Employee/Employee.js'
import { Manager } from './Employee/Manager.js'

// A Client example
const clientName = 'Tiago'
const clientCPF = '710.229.300-36'
const clientPassword = 1234
const client = new Client(clientName, clientCPF, clientPassword)
console.log(`A Client object: ${JSON.stringify(client)} \n`)

// Client has only a cpf getter, so you cannot set a property cpf
const cpf = client.cpf // ok
//client.cpf = 'Lucas' // not ok

// CheckingAccount's static property
const checkingAccount = new CheckingAccount(client, 123)
console.log(`CheckingAccount objects quantity: ${CheckingAccount.accountsNumber} \n`)

// An Employee example
const employeeName = 'Lucas'
const employeeSalary = 4000
const employeeCPF = '755.339.980-98'
const employee = new Employee(employeeName, employeeSalary, employeeCPF)
employee.registerPassword(5678)
console.log(`An Employee object: ${JSON.stringify(employee)} \n`)

// Passing a wrong password
const wrongPassword = 9568
console.log(`Is he authenticated? ${employee.authenticate(wrongPassword) ? 'Yes' : 'No'} \n`) // No

const managerName = 'Daniel'
const managerSalary = 5000
const managerCPF = '509.297.050-25'
const manager = new Manager(managerName, managerSalary, managerCPF)
manager.registerPassword(9123)
console.log(`A Manager object: ${JSON.stringify(manager)} \n`)
