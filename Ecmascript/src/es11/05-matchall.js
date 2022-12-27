const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, orange, etc, etc, etc';
for (const match of fruit.matchAll(regex)){
  console.log(match);
}
/* 
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, orange, etc, etc, etc',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, orange, etc, etc, etc',  
  groups: undefined
]
*/