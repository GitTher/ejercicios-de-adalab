'use strict';

const button = document.querySelector('.js-button');

button.addEventListener('click', handleButtonEvent());

function handleButtonEvent(event) {
    console.log(event);
    console.log(event.type);
}

/* Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.

Nota: cuando logueamos un objeto en la consola, a su izquierda aparece un triangulo que nos permite desplegarlo para ver sus métodos y propiedades. */
