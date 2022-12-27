/* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. */
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]];
console.log(array.flat(3));
/* 
[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 4
]
*/

// flatmap

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v*2]));
/* 
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10 
]
*/

