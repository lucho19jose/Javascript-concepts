## Un Binary Search

Un Binary Search Tree básicamente costa de un elemento root (El elemento padre del que todos descienden). Es a partir de ese elemento en donde se empieza la búsqueda.

La condición es simple, un elemento únicamente puede tener dos descendientes, no más. Los descendientes que son mayores que el elemento padre se colocan del lado derecho y los descendientes que son menores se colocan del lado izquierdo, simple, ¿verdad?

Para buscar en un Binary Search Tree simplemente tienes que preguntarte: ¿Este elemento es mayor o menor que el que estoy buscando? Ohh es mayor, entonces me voy para la izquierda, y así sucesivamente hasta que encuentres el elemento que estabas buscando.



![bynay search tree](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDE2Y2JjYzY3M2ZiMzQ5NTgzZWRiNzZmZjYzZGU4MTNmMGQ5MDY3MiZjdD1n/eumDfmFb9eFmvx1yqN/giphy.gif)

Methods:

- search
- insert
- delete