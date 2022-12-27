
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