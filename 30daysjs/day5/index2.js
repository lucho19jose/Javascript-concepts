/* En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null

 */

function findLargestPalindrome(words) {
  let lastpalindrome = null;
  words.forEach(word => {
    let splitword = word.split('');
    let counter = 0;
    let downcount = word.length-1;
    let ispalindrome = true;
    while(counter<=downcount){
        if(splitword[counter] === splitword[downcount]){
          ispalindrome = true;
        }else{
          ispalindrome = false;
          break;
        }
      downcount--;
      counter++;
    }
    if(ispalindrome){
      lastpalindrome = lastpalindrome ? word.length > lastpalindrome.length ? word : lastpalindrome : word;
    }
  });
  return lastpalindrome;
}
console.log(findLargestPalindrome(["racecar", "level", "world", "hello", "dabalearrozalazorraelabad"]))
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]))