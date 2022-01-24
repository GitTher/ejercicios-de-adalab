'use strict'

const button = document.querySelector('.button');

function toggleClass(event) {
button.classList.toggle('change');
}

button.addEventListener('click', toggleClass);
