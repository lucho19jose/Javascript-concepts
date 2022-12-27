/* 
Set es parecido al array, pero una de las diferencias con el array es que impide agregar elementos repetidos

*/
const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);// Set(3) { 'item 1', 'item 2', 'item 3' }