const users = { 
  joseluisb: {
    country: 'PE'
  },
  ana: {
    country: 'CO'
  }
}

console.log(users?.joseluisb?.country);// PE
console.log(users?.ana?.hobby); // undefined
