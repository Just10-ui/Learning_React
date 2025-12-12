class Name {
  constructor(name) {
    this.user = name;
  }
} //An object using class

const myName = new Name('Justin');
console.log(myName);

class Surname {
  constructor(surname) {
    this.sur = surname;
  }

  present() {
    return `This is my surname '${this.sur}'`;
  }
}//Created a method in class

const mySurname = new Surname('Apolong');
console.log(mySurname.present());

class Age extends Surname {
  constructor(surname, age) {
    super(surname);
    this.age = age;
  }

  show() {
    return `${this.present()}, and I am ${this.age} years old.`;
  }
}

const myAge = new Age('Pajares', 22);
console.log(myAge.show());