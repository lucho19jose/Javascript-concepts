function counter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  }
}

const myCounter = counter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3


/* another example */
function createCalculator() {
  let total = 0;

  function add(num){
    total += num; 
    return total;
  }
  function subtract(num) {
    total -= num; 
    return total;
  }
  function multiply(num) {
    total *= num; 
    return total;
  }
  function divide(num) {
    total = total/num;
    return total;
  }
  function clear() {
    total = 0;
    return total;
  }
  function getTotal(){
    return total;
  }
  return {
    add, subtract, multiply, divide, clear, getTotal
  }
}

const calculadora = createCalculator();
console.log(calculadora.add(10))// 10
console.log(calculadora.add(10))// 20
console.log(calculadora.subtract(10))// 10
console.log(calculadora.multiply(2))// 20
console.log(calculadora.divide(4)) // 5
console.log(calculadora.clear()) //0


/* another example */
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(`Count is ${count}`);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); // 1
increment(); // 2
increment(); // 3
log(); // 3


/* another example */

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);
