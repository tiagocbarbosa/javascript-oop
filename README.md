# javascript-oop
This is my `javascript` project using some OOP concepts.

## About
It is highly recommended to start looking from the "index.js" file. There I explain some aspects of my project.

Check below a list of OOP concepts that you will find in this project.

### Class
In "Client\Client.js":
```
class Client {
  // ...
}
```

### Encapsulation
In "Employee\Employee.js":
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
SavingAccount extends Account {
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

------

And that's pretty much it, hope you liked it! Thanks :)
