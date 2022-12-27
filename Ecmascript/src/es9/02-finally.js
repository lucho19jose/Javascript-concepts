const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve('Hey!');
    } else {
      reject('Opps!');
    }
  })
}

//console.log(anotherFunction());
anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> {
    console.log("finally");
  });
  /* 
  Opps!  
  finally
  */