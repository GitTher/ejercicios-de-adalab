'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista',
}
const adalaber2 = {
    name: 'Rocio',
    age: 25,
    job: 'actriz',
}


adalaber1.run = phrase => `${phrase}`;
adalaber1.runAMarathon = distance => `Estoy corriendo una maraton de ${distance} kilómetros`;

console.log(adalaber1.run('Estoy corriendo'));
console.log(adalaber1.runAMarathon(50));

function handleAdalaber() {
    const showAdalaber1 = document.querySelector('.adalaber1');
    const showAdalaber2 = document.querySelector('.adalaber2');
    showAdalaber1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

    showAdalaber2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`
}

handleAdalaber();

console.log(adalaber1);

/* Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.*/
