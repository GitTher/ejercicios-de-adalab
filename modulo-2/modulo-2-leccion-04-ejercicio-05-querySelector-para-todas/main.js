'use strict'

function getEl(clase) {
  return document.querySelector(clase)
}

const titulo1El = getEl(".titulo1");
console.log("Tu clase es ", titulo1El);

const parrafo1El = getEl(".parrafo1");
console.log("Tu clase es ", parrafo1El);

const parrafo2El = getEl(".parrafo2");
console.log("Tu clase es ", parrafo2El);

const titulo2El = getEl(".titulo2");
console.log("Tu clase es ", titulo2El);

const listEl = getEl(".list");
console.log("Tu clase es ", listEl);

const item1El = getEl(".item1");
console.log("Tu clase es ", item1El);

const item2El = getEl(".item2");
console.log("Tu clase es ", item2El);

const item3El = getEl(".item3");
console.log("Tu clase es ", item3El);

const btnEl = getEl(".btn");
console.log("Tu clase es ", btnEl);
