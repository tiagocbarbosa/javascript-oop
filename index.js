import { Client } from './Client/Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { Employee } from './Employee/Employee.js'
import { Manager } from './Employee/Manager.js'
import { AuthenticationSystem } from './AuthenticationSystem/AuthenticationSystem.js'

/* Let's see a Client object example, shall we? */
const clientName = 'Tiago'
const clientCPF = '710.229.300-36'
const clientPassword = 1234
const client = new Client(clientName, clientCPF, clientPassword)
console.log(`A Client object: ${JSON.stringify(client)} \n`)

/* Oops, Client has only a cpf getter, so you cannot set a property cpf */
const cpf = client.cpf // ok
//client.cpf = '785.226.631-42' // not ok

/* Here we can see how to use a static property by invoking CheckingAccount's 'accountsNumber' method */
const checkingAccount = new CheckingAccount(client, 123)
console.log(`CheckingAccount objects quantity: ${CheckingAccount.accountsNumber} \n`)

/* Another object example, but it's an Employee */
const employeeName = 'Lucas'
const employeeSalary = 4000
const employeeCPF = '755.339.980-98'
const employee = new Employee(employeeName, employeeSalary, employeeCPF)
employee.registerPassword(5678)
console.log(`An Employee object: ${JSON.stringify(employee)} \n`)

/* What happens if we pass a wrong password? */
const wrongPassword = 9568
console.log(`Is he authenticated? ${employee.authenticate(wrongPassword) ? 'Yes' : 'No'} \n`) // prints out 'No'

/* A Manager example */
const managerName = 'Daniel'
const managerSalary = 5000
const managerCPF = '509.297.050-25'
const manager = new Manager(managerName, managerSalary, managerCPF)
manager.registerPassword(9123)
console.log(`A Manager object: ${JSON.stringify(manager)} \n`)

/* Now let's see a simple password authentication */

/* A Client object with correct password but without 'authenticate' function */
console.log(AuthenticationSystem.login(client, clientPassword)) // prints out 'false'
/* An Employee object with wrong password but with 'authenticate' function */
console.log(AuthenticationSystem.login(employee, wrongPassword)) // prints out 'false'
/* A Manager object with correct password and 'authenticate' function */
console.log(AuthenticationSystem.login(manager, 9123)) // prints out 'true'
