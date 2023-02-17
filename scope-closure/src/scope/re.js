var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);


var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var lastName = 'David'; // declarando / asignando
var lastName = 'Ana' // reasignado
console.log(lastName);

// let

let fruit = 'Apple'; // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit)

let fruit = 'Banana';// SyntaxError: Identifier 'fruit' has already been declar

// const
const animal = 'dog'; // declara y asigna
animal = 'cat'; // reasignando
console.log(animal); // TypeError: Assignment to constant variable.

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);// [ '🚗' ]

vehicles.pop();
console.log(vehicles); // []
vehicles[0] = '🚛'
console.log(vehicles);// [ '🚛' ]
