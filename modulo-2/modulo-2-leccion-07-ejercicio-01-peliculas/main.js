'use strict'

const peliculas = ['El Dorado', 'El Castillo Ambulante', 'Los Miserables'];

console.log(peliculas);

function workWithMovies() {

    peliculas [3] = 'Entrevista con el vampiro';
    
    console.log(peliculas);
    
    peliculas [3] = 'Coco';
    
    console.log(peliculas);
}

console.log(workWithMovies());