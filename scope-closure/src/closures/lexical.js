const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

function sumWithClosure(firstNum = 0) {
  const first = firstNum;
  return function parent(secondNum = 0) {
    return secondNum + first;
  }
}

console.log(sumWithClosure(5)(10));