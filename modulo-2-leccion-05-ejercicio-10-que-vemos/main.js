'use strict'

const button = document.querySelector('.button');
const list = document.querySelector('.list')

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function handleMovieList() {
    list.innerHTML = `<li class="movie movie__inception">${inception}</li><li class="movie movie__theButterFlyEffect">${theButterFlyEffect}</li><li class="movie movie__eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li><li class="movie movie__blueVelvet">${blueVelvet}</li><li class="movie movie__split">${split}</li>`

    function handleShowMovie(event) {
        const selectedMovie = event.currentTarget;
        console.log(selectedMovie.innerHTML);
    }
    const movieInception = document.querySelector('.movie__inception');
    const movietheButterFlyEffect = document.querySelector('.movie__theButterFlyEffect');
    const movieeternalSunshineOfTheSM = document.querySelector('.movie__eternalSunshineOfTheSM');
    const movieblueVelvet = document.querySelector('.movie__blueVelvet');
    const moviesplit = document.querySelector('.movie__split');
    movieInception.addEventListener('click', handleShowMovie);
    movietheButterFlyEffect.addEventListener('click', handleShowMovie);
    movieeternalSunshineOfTheSM.addEventListener('click', handleShowMovie);
    movieblueVelvet.addEventListener('click', handleShowMovie);
    moviesplit.addEventListener('click', handleShowMovie);
}

button.addEventListener('click', handleMovieList);

/* Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película. */