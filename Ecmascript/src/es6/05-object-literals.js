
function newUser(user, age, country, uId){
  return {
    user, 
    age, 
    country,
    id: uId
  }
}

console.log(newUser("joseluisb", 22, 'PE', 1));// { user: 'joseluisb', age: 22, country: 'PE', id: 1 }

