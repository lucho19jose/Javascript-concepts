// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [ a , b ] = fruits;

console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'Jose', age: 22 };
let { username, age } = user;
console.log(username, user.age);

// spread operator

let person = { name: 'Oscar', age: 28 };
let country = 'MX';

let data = { ...person, country };
console.log(data);// { name: 'Oscar', age: 28, country: 'MX' }

// rest 

function sum(num, ...values) {
  console.log(values);//[ 1, 2, 3 ]
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

/*
output
[
  '👩', '‍',   '❤',  
  '️',   '‍',   '💋',
  '‍',   '👩'        
]
[
  '👨', '‍',   '👩',
  '‍',   '👦', '‍', 
  '👦'
] */