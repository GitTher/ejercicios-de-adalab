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

function handleAdalaber() {
    const showAdalaber1 = document.querySelector('.adalaber1');
    const showAdalaber2 = document.querySelector('.adalaber2');
    showAdalaber1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

    showAdalaber2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`
}

handleAdalaber();

console.log(adalaber1);
/* Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:

Susana, 34 años, periodista

Luego muestra en la web una frase como esta, accediendo a los datos del objeto:

'Mi nombre es Susana, tengo 34 años y soy periodista'

Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:

Rocío, 25 años, actriz */
