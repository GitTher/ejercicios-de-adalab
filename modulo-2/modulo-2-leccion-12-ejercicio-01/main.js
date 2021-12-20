'use strict';

const numbers = [1, 2, 3];
const list = document.querySelector('.list');


for (let i = 0; i < numbers.length; i++) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  list.appendChild(newItem);
}



/* Crear una página HTML con una lista ul vacía. 

Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. 

Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. 

Usaremos los métodos avanzados para manipular el DOM, no innerHTML */


