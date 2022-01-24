'use strict'

function changeBackground (event){
  const body = document.querySelector('.body');
if (event.key === 'r'){
  body.classList.remove('purple');
  body.classList.add('red');
} else if (event.key === 'm'){
  body.classList.remove('red');
  body.classList.add('purple');
} else {
  body.classList.remove('red', 'purple');
}
}

document.addEventListener('keyup', changeBackground);

