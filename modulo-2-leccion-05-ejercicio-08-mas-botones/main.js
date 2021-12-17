'use strict'

const buttonOne = document.querySelector('.button-1');

const buttonTwo = document.querySelector('.button-2');

function toggleClass(event) {
event.currentTarget.classList.toggle('change');
}

buttonOne.addEventListener('click', toggleClass);

buttonTwo.addEventListener('click', toggleClass);

