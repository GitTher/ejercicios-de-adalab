'use strict'


function changeBackground (){
  const container = document.querySelector('.container');
if (window.scrollY >= 250){
  container.classList.remove('blue');
  container.classList.add('pink');
} else {
  container.classList.remove('pink');
  container.classList.add('blue');
}
}

window.addEventListener('scroll', changeBackground);
