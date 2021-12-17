'use strict';

function getNumber() {
  fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        '.js-result'
      ).innerHTML = `Toma número: ${data.result}`;
    });
}
document.querySelector('.js-number').addEventListener('click', getNumber);

/* Vamos a jugar un poco con el código del ejemplo anterior. Mirando la documentación de 'rand.fun', vamos a pedir un número entero (integer).

Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20 */
