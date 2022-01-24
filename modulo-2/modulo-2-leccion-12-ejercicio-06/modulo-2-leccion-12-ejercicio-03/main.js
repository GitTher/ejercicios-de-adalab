'use strict';
/* --- POR TERMINAR --- */

/* La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript? Vamos a crear todos los elementos HTML como hemos aprendido en esta sesión, es decir, sin innerHTML ;)
Repítelo 100 veces

1.
¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles". Cada frase en una línea diferente. ¿Podremos conseguirlo? Primero dale a la web aspecto de pizarra: el fondo de negro, las letras en blanco, tipografía que simula el pintado con tiza tipo chalkboard, etc. Y luego, ¡a escribir! 

2.
Un combo por frase
¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento select de HTML) al final de cada línea de texto. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos.*/

const chalkboard = document.querySelector('.chalkboard');
const phrase = 'He aprendido bien cómo funcionan los bucles';

for (let i = 0; i < 100; i++) {
  const newParagraph = document.createElement('p');
  const newPhrase = document.createTextNode(phrase);
  const newSelect = document.createElement('select');
  const newOption = document.createElement('option');
  newSelect.appendChild(newOption);
  newParagraph.appendChild(newPhrase);
  chalkboard.appendChild(newParagraph, newSelect);
  /* IVAN
    option = docuemnt.createElement('option');
    option.appendChild(document.createTextNode('Texto que sea')) */
}

/* <select id="select" class="select" name="select">
  <option value="selecciona" selected disabled>
    Selecciona tu nombre
  </option>
  <option value="paca">Paca</option>
  <option value="pepa">Pepa</option>
  <option value="francisca">Francisca</option>
</select> */