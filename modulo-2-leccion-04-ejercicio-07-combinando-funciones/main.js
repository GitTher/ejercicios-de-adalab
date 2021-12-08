'use strict'

function getEl(clase) {
  return document.querySelector(clase)
}

const numberString = getEl(".js-number");
var numberNumber = parseInt(numberString.innerHTML)

function parImpar(numberNumber) {
  if (numberNumber % 2 == 0) {
    return 'Tu número ' + numberNumber + ' es par';
  } else {
    return 'Tu número ' + numberNumber + ' es impar';
  }
}

console.log(parImpar(numberNumber));