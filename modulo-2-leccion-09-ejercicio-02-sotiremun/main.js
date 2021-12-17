'use strict';

/* Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. 

Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden. */

const arr = [1];

function get100Numbers() {
  for (let i = 0; i < 99; i++) {
    arr.push(1 + arr.length);
  }
}

function getReversed100Numbers() {
  get100Numbers();
  arr.reverse();
}

getReversed100Numbers();
console.log(arr);
