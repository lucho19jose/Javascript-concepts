
function* iterate(array) {
  for(let value of array){
    yield value;
  }
}

const it = iterate(['Oscar', 'Jose', 'Brayan', 'Mari'])
console.log(it.next().value);// Oscar
console.log(it.next().value);// Jose
console.log(it.next().value);// Brayan
console.log(it.next().value);// Mari
console.log(it.next().value);// undefined

function* getId() {
  let id = 0;
  while(true){
    id++;
    yield id;
  }
}

michi = getId();
console.log(michi.next());
console.log(michi.next());
console.log(michi.next());
console.log(michi.next());
console.log(michi.next());
/* print
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
*/