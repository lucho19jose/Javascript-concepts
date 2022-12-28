## Event Loop

El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.

- Memory Heap
  los objetos son asignados a un motículo (espacio grande en memoria no organizado).
  - se guardan las variables, funciones, scope, etc.

- Call Stack (pila)
  lifo(last in, first out)
  como platos encima de otros

- Task Queue(FIFO)
  Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar al stack(pila).
  El stack debe estar vacío.

- MicroTask Queue
  Las promesas tienen otra forma de ejecutarse y una prioridad superior. mas prioritarias que scheduled task.

- scheduled Task - web APIs
  Javascript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM.
  Node: fs, https.
  aqui se ponen las cosas asincronas

El event loop es un pequeño componente(programita) que su tarea es mover del Task Queue al stack, solo si el Stack esta vacío.

  
![eventlooppltzi](https://static.platzi.com/media/user_upload/EventLoop-89081031-65ba-4a64-b5eb-a650f86bc015.jpg)

![eventloop](https://media2.giphy.com/media/JFsW5Wtec5dA1rthkq/giphy.gif?cid=790b76115b2cd3da43fb35a82b385ca8dd92e173766426f8&rid=giphy.gif&ct=g)


