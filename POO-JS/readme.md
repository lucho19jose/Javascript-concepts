# Javascript

## Paradigmas

- Estructurado
- Orientado a objetos
- Funcional

Ventajas
- Orden
- Reutilizar código

¿Qué es un objeto de Javascript?

Objetos literales != instancias (pero no del todo cierto porque son instancias de prototipo Object)

cuando vemos la propiedad __proto__ de cualquier objeto literal, tenemos una lista de metodos de los objetos como hasownproperty, push, 


Un objeto en JavaScript es una instancia del prototipo Object que es creado de forma “nativa” por Js


## Abstracción

Podemos reducir la complejidad y permitir una implementación y diseño eficiente de los datos.

Ventajas de uso:

- Evitamos codigo duplicado, es decir, reusamos codigo.
- Podemos crear múltiples instancias con una sola abstracción.
- Al encapsular datos, los estamos protegiendo
- Evitamos código a bajo nivel.
- Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.

## Encapsulamiento
Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

Cuando hablamos de **encapsulamiento **hablamos de:

Esconder métodos y atributos 👻

No permitir la alteración de métodos y atributos ❌

Encapsulamiento en JavaScript

No permitir la alteración de métodos y atributos ❌

Formas de aplicar encapsulamiento en JavaScript

Getters y setters 🖐

Namespaces 🙂

Object.defineProperties 🎈

Módulo de ES6 🤝

## Herencia

La herencia nos permite crear “clases madre”, la cual servirá de molde para clases hijas, que compartirán sus métodos y atributos.
Usamos la palabra reservada extends.

## Polimorfismo

El polimorfismo en JavaScript les permite a nuestras subclases cambiar o anular el comportamiento de los métodos o atributos que anidaron de una super clase.

Existen estos tipos de polimorfismo según sea el lenguaje de programación: sobrecarga paramétrico e inclusión.

En JavaScript solo podemos utilizar el polimorfismo de inclusión, nos va a permitir sobrescribir que método o atributo heredado vamos a cambiar de la superclase.


