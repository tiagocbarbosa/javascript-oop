# javascript-oop
This is my `javascript` project using some OOP concepts.

## About
It is highly recommended to start looking at the "index.js" file, there I explain some aspects of my project.

Check below a list of OOP concepts that you will find in this project.

### Class
In "Client\Client.js":
```
class Client {
  // ...
}
```

### Encapsulation
Private attribute in "Employee\Employee.js":
```
constructor(name, salary, cpf) {
  this._name = name
  // ...
}
```

### Abstraction
Abstract method in "Account\Account.js":
```
withdraw(value) {
  throw new Error('Abstract methods must be overwritten')
}
```
Abstract class in "Account\Account.js":
```
constructor(initialBalance, client, agency) {
  if(this.constructor == Account) {
    throw new Error('You cannot initialize an Abstract class of the type Account')
  }
  // ...
}
```

### Inheritance
In "Account\SavingAccount.js":
```
class SavingAccount extends Account {
  // ...
}
```

### Polymorphism
In "Account\CheckingAccount.js":
```
withdraw(value) {
  const tax = 1.1
  return this._withdraw(value, tax)
}
```
In "Account\SalaryAccount.js":
```
withdraw(value) {
  const tax = 1.01
  return this._withdraw(value, tax)
}
```

### Interface
In "AuthenticationSystem\AuthenticationSystem.js":
```
static isAuthenticable(authenticable) {
  return 'authenticate' in authenticable
  && authenticable.authenticate instanceof Function
}
```

------

And that's pretty much it, hope you liked it! Thanks :)
