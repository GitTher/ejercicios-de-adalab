'use strict';

const times = [56, 9, 45, 28, 35,];
console.log(times.length);

const result = times.reduce((acc, number) => acc + number) / times.length;

console.log(result);

/* Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce? */
