
async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['Oscar', 'Jose', 'David']);
console.log('After');