class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    if (this._name) {
      // This should trigger the `getter-return` rule because it's missing a return statement.
    }
  }
}

const person = new Person('Alice');
console.log(person.name); // This will log 'undefined' due to the missing return statement.
