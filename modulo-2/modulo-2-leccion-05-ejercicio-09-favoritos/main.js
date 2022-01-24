'use strict'

let teacher = document.querySelectorAll('.teacher');

function handleFavouriteTeacher(event) {
    console.log('¡Funciona!')
    event.currentTarget.classList.toggle('teacher--selected');

    if (event.currentTarget.classList.contains('teacher--selected')) {
        event.currentTarget.querySelector('.favorite').innerHTML = 'Quitar';

    } else {
        event.currentTarget.querySelector('.favorite').innerHTML = 'Añadir';
    }

}

for (const eachTeacher of teacher) {
    eachTeacher.addEventListener('click', handleFavouriteTeacher);
} 