# javascript-oop

Here's a list of OOP concepts that you can find in my project.

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
