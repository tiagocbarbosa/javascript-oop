import { Client } from './Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { Employee } from './Employee/Employee.js'
import { Manager } from './Employee/Manager.js'
import { AuthenticationSystem } from './AuthenticationSystem.js'

// A Client example
const clientName = 'Tiago'
const clientCPF = '710.229.300-36'
const clientPassword = 1234
const client = new Client(clientName, clientCPF, clientPassword)
console.log(`A Client object: ${JSON.stringify(client)} \n`)

// client has only a cpf getter, so you cannot set a property cpf
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

// passing a wrong password
const wrongPassword = 9568
console.log(`Is he authenticated? ${employee.authenticate(wrongPassword) ? 'Yes' : 'No'} \n`) // No

// A Manager example
const managerName = 'Daniel'
const managerSalary = 5000
const managerCPF = '509.297.050-25'
const manager = new Manager(managerName, managerSalary, managerCPF)
manager.registerPassword(9123)
console.log(`A Manager object: ${JSON.stringify(manager)} \n`)

// A Client object with correct password but without 'authenticate' function
console.log(AuthenticationSystem.login(client, clientPassword)) // false
// An Employee object with wrong password but with 'authenticate' function
console.log(AuthenticationSystem.login(employee, wrongPassword)) // false
// A Manager object with correct password and 'authenticate' function
console.log(AuthenticationSystem.login(manager, 9123)) // true
