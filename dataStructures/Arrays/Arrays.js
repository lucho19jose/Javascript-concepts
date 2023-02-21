class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  unshift(item){
    for (let i = this.length; i >= 0; i--) {
      if (this.data[i-1]) {
        this.data[i] = this.data[i-1]
      } else {
        this.data[0] = item;
      }
    }  
    this.length++;
    return this.length;
  }
}

/* const myArray = new MyArray();
console.log(myArray.unshift("!!!"));
console.log(myArray.unshift("Platzinauta"))
console.log(myArray.unshift("lo"));
console.log(myArray.unshift("lograste"));
console.log(myArray.unshift("lograste1"));
console.log(myArray.unshift("lograste2"));
console.log(myArray.unshift("lograste3"));
console.log("data", myArray.data); */


class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    let newdata = {}; 
    if(this.length == 0) {
      return undefined;
    }
    for(let i = 0; i<this.length; i++) {
      if(this.data[i+1]){
        newdata[i] = this.data[i+1];
      }
    }
    const datatoreturn = this.data[0];
    this.data = newdata;
    this.length--;
    return datatoreturn;
  }
}

const myArray = new BetterArray()
/* myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío") */

console.log(myArray.data);
console.log(myArray.shift());
console.log(myArray.data);
