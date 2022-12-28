/* algo que puede ocurrir ahora, mañana o nunca */
const promise = new Promise(function(resolve, reject){
  resolve('Hey!');
})

const cows = 9;
const countCows = new Promise(function (resolve, reject){
  if(cows > 10){
    resolve(`we have ${cows} cows on the farm`);
  }else {
    reject('There is no cows on the farm');
  }
});

countCows.then((result)=> {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(()=> {
  console.log("end");
})

function delay(time, message) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(message);
    }, time)
    //reject('mmmm')
  })
}
let time = 2000

delay(time, `Hello after ${time}ms`).then((msg) => {
  console.log(msg);
}).catch((error)=>{
  console.log(error);
})
