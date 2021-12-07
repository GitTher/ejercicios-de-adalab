'use strict'

let ingredient = 'Espinacas';

switch (ingredient) {
  case 'Pollo':
    console.log('Usando ' + ingredient + ' puedes cocinar Filete con patatas');
    break;
  case 'Merluza':
    console.log('Usando ' + ingredient + ' puedes cocinar Merlucita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Usando ' + ingredient + ' puedes cocinar Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera');
}