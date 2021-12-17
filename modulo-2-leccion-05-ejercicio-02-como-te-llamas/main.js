'use strict'

const button = document.querySelector('.button');

function insertName (){
  const name = document.querySelector('.name');
  return console.log ('Hola ' + name.value)
}

button.addEventListener('click', insertName);
