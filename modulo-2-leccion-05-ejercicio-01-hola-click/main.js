'use strict'

const button = document.querySelector('.button');

function changeText (){
  const title = document.querySelector('.title');
  title.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', changeText);




