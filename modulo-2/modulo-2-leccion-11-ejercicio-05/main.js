'use strict';

/* --- SIN TERMINAR --- */

const radioButton = document.querySelectorAll('.radio');
const mainContent = document.querySelector('.main');

function handleThemeStyle(event) {
  const userValue = event.target.value;
  if (userValue === 'dark') {
    mainContent.classList.add('dark');
    mainContent.classList.remove('light');

  } else if (userValue === 'light') {
    mainContent.classList.add('light');
    mainContent.classList.remove('dark');

  }
}

for (const eachRadio of radioButton) {
  eachRadio.addEventListener('click', handleThemeStyle)
}

localStorage.setItem('userValue', JSON.stringify(userValue));

/* Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
Añadiremos dos radio buttons para poder elegir entre claro y oscuro.

Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.

Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.

Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.

Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción. */


