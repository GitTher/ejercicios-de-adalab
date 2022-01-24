'use strict';

let userMovies = [];

const submit = document.querySelector('.enviar');

function handleFavouriteMovies(event) {
    event.preventDefault()
    userMovies[0] = document.querySelector('.movie__first').value;
    userMovies[1] = document.querySelector('.movie__second').value;
    for (const eachMovie of userMovies) {
        console.log('¡A mí también me encantó ' + eachMovie + '! Tenemos mucho en común, humana.');
    }
}

submit.addEventListener('click', handleFavouriteMovies);


/* Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra. */
