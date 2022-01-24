'use strict'

function media(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const firstTry = media(3, 2, 4, 6);
console.log("first try", firstTry);

const secondTry = media(2, 4, 8, 10);
console.log("second try", secondTry);

const thirdTry = media(5,10, 10, 5)
console.log("third try", thirdTry);