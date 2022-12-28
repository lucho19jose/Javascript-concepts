function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3

function* iterate(array) {
  for(let value of array){
    yield value;
  }
}

const it = iterate(['oscar', 'jose', 'ana', 'juan']);
console.log(it.next().value)// oscar
console.log(it.next().value)// jose
console.log(it.next().value)// ana
console.log(it.next().value)// juan