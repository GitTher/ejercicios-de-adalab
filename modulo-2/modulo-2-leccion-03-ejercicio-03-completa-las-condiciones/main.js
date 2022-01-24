'use strict'

let numberIs = 55;

if (numberIs === 0) {
  console.log('El número es 0');
} else if (numberIs < 0) {
  console.log('El número es negativo');
} else if ((numberIs + 2) > 13 && (numberIs +2) <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (numberIs > 20 && numberIs < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}