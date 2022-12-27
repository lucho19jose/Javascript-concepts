var lastName = 'David';

lastName = 'Oscar';

console.log(lastName);


let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'cat';
console.log(animal);


const fruits = () => {
  if(true){
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
  }
  console.log(fruit1); // Apple 
  console.log(fruit2); // ReferenceError: fruit2 is not defined
  console.log(fruit3); // ReferenceError: fruit2 is not defined
}

fruits()