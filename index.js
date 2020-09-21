import { Client } from './Client.js'
import { Account } from './Account/Account.js'

// *** Printing a Client example ***
const clientName = 'Tiago'
const clientCPF = '710.229.300-36'
const clientPassword = 1234
const client = new Client(clientName, clientCPF, clientPassword)
console.log(client)

// client has only a cpf getter, so because of this you cannot set a property cpf
const cpf = client.cpf // ok
//client.cpf = 'Lucas' // not ok

// *** Printing Accounts examples ***
