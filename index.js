import { Client } from './Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { Employee } from './Employee/Employee.js'

/* *********************** */
/* Printing Client example */
/* *********************** */

const clientName = 'Tiago'
const clientCPF = '710.229.300-36'
const clientPassword = 1234
const client = new Client(clientName, clientCPF, clientPassword)
console.log(`A Client object: ${JSON.stringify(client)} \n`)

// client has only a cpf getter, so you cannot set a property cpf
const cpf = client.cpf // ok
//client.cpf = 'Lucas' // not ok

/* ************************** */
/* Printing Accounts examples */
/* ************************** */

// printing the static property from CheckingAccount class
const checkingAccount = new CheckingAccount(client, 123)
console.log(`CheckingAccount objects quantity: ${CheckingAccount.accountsNumber} \n`)

/* *************************** */
/* Printing Employees examples */
/* *************************** */

const employeeName = 'Lucas'
const employeeSalary = 4000
const employeeCPF = '755.339.980-98'
const employee = new Employee(employeeName, employeeSalary, employeeCPF)
employee.registerPassword(5678)
console.log(`An Employee object: ${JSON.stringify(employee)} \n`)

// passing a wrong password
const wrongPassword = 9568
console.log(`Is he authenticated? ${employee.authenticate(wrongPassword) ? 'Yes' : 'No'}`) // No
