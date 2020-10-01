import { Client } from './Client/Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { SalaryAccount } from './Account/SalaryAccount.js'
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
console.log(AuthenticationSystem.login(client, clientPassword)) // won't login, prints out 'false'
/* An Employee object with wrong password but with 'authenticate' function */
console.log(AuthenticationSystem.login(employee, wrongPassword)) // won't login, prints out 'false'
/* A Manager object with correct password and 'authenticate' function */
console.log(AuthenticationSystem.login(manager, 9123), '\n') // will login, prints out 'true'

/* But hey, what about the accounts? Let's check if they are working! */

/* First of all, you cannot initialize an abstract class */
const initialBalance = 300
const agency = 430
//const account = new Account(initialBalance, client, agency) // not ok

/* But you can initialize its derived class */
const salaryAccount = new SalaryAccount(client)

/* And you can use the methods from base class */
salaryAccount.deposit(300)
checkingAccount.deposit(300)

/* Last but not least, CheckingAccount and SalaryAccount have different taxes values because they have
overwritten 'withdraw' method */
const withdrawnValue1 = checkingAccount.withdraw(10)
const withdrawnValue2 = salaryAccount.withdraw(10)

console.log(`CheckingAccount object withdrawn value: ${withdrawnValue1}, SalaryAccount object withdrawn value: ${withdrawnValue2} \n`)

// console.log('That is all, I hope you enjoyed :) Thanks!')
console.log(`---
That's all, I invite you to check all the other classes I've created.
Hope you liked it :) Thanks! \n`)
