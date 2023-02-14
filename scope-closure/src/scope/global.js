// variables

var a; // declarando

var b = 'b'; // declaramos / asignamos
b = 'bb' // reasignación
var a = 'aa' // redeclaración

// Global Scope


function bestFruit() {
  var fruit = 'Apple'; // global
  console.log(fruit);
}

console.log(fruit);

bestFruit();

function countries() {
  country = 'Colombia'; //global
  console.log(country);
}

countries();
console.log(country);