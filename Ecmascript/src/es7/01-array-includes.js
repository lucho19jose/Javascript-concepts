let numbers = [1, 2, 4, 6, 7, 8];

console.log(numbers.includes(6));

const list = ['oscar', 'David', 'Ana'];

console.log(list.includes('oscar'));

/* in objects */
const letras = { a: 1, b: 2, c: 3 }

"a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true
