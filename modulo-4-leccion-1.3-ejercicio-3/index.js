const math = require('./math');

const aNumber = 7;
const bNumber = 3;

const sum = math.add(aNumber, bNumber);
const sub = math.sub(aNumber, bNumber);

console.log(`La suma de ${aNumber} y ${bNumber} da como resultado ${sum}`);

console.log(`La resta de ${aNumber} y ${bNumber} da como resultado ${sub}`);