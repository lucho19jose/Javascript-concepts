
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