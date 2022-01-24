'use strict'

let container = document.querySelector(".container");

if (container.classList.contains('warning')) {
  container.innerHTML = `<h1>AVISO</h1>
  <p>Tenga cuidado</p>`;
} else if (container.classList.contains('error')) {
  container.innerHTML = `<h1>ERROR</h1>
  <p>Ha surgido un error</p>`;
} else if (container.classList.contains('success')) {
  container.innerHTML = `<h1>CORRECTO</h1>
  <p>Los datos son correctos</p>`;
}
