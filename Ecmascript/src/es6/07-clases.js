/* declarando */

class User {};

// instance de una clase

// const newUser = new User();

class user {
  // metodos

  greeting(){
    return 'Hello';
  }
};

const joseluisb = new user();
console.log(joseluisb.greeting());// Hello
const bbarbo = new user();
console.log(bbarbo.greeting());// Hello

// constructor

class user {
  // Constructor
  constructor(){
    console.log("Nuevo usuario");
  }

  greeting() {
    return 'Hello';
  }
}

const david = new user();

// this

class user {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }
}


const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
  // constructor
  constructor(name, age){
    this.name = name, 
    this.age = age;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n){
    return this.age = n;
  }
}

const brayan = new user('Brayan', 15);
console.log(brayan.uAge);
console.log(brayan.uAge = 20);