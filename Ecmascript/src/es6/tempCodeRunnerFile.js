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