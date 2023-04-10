class MyArray {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  map(func) {
    let newArray = {};
    for (const key in this.array) {
      newArray[key] =  func(this.array[key]) 
    }
    return newArray;
  }

  filter(func) {
    let newArray = {};
    for (const key in this.array) {
      if(func(this.array[key])){
        newArray[key] = this.array[key]
      }
    }
    return newArray;
  }

  push(item) {
    let counter = 0;
    for (const key in this.array) {
      counter++;
    }
    this.array[counter] = item;
    this.length +=1;
  }

  pop() {
    let counter = 0;
    for (const key in this.array) {
      counter++;
    }
    let popvalue = this.array[counter-1];
    delete this.array[counter-1];
    this.length += 1; 
    return popvalue;
  }

  join(character = ",") {
    let joining = "";
    for (const key in this.array) {
      if(key==0){
        joining = this.array[key];
      }else{
        joining = joining + character + this.array[key];
      }
    }
    return joining;
  }

  shift() {
    let shiftvalue = this.array[0];
    delete this.array[0];
    let newArray = {};
    for (const key in this.array) {
      newArray[key-1] = this.array[key]
    }
    this.array = newArray;
    this.length -= 1; 
    return shiftvalue;
  }

  unshift(item) {
    let newArray = {};
    for (const key in this.array) {
      newArray[parseInt(key)+1] = this.array[key]
    }
    newArray[0] = item;
    this.array = newArray;
    this.length += 1; 
    return item;
  }
}

const myArray = new MyArray();
myArray.push(3)
myArray.push(4)
myArray.push(5)
console.log(myArray.array);
console.log(myArray.pop());
console.log(myArray.array);
console.log(myArray.join('-'));
console.log(myArray.unshift(10));
console.log(myArray.array);
console.log(myArray.map((item)=>item*10))
console.log(myArray.filter((item)=>item<2))
console.log(myArray.filter((item)=>item<2))
