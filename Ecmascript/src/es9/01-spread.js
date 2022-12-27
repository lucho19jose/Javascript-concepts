const user = { username: 'joseluisb', age: 22, country: 'PE' };
const { username, ...values } = user;
console.log(username);// joseluisb
console.log(values);// { age: 22, country: 'PE' }


const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true

/* instead use structuredClone*/
const original1 = { datos: [1, [2, 3], 4, 5] }
const copia1 = structuredClone(original1)

original1 === copia1 // false
original1["datos"] === copia1["datos"] // false