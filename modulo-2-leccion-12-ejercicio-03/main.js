'use strict';


/* Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:

Nombre

Apellidos

Teléfono

Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente. */


const autocompletado = [
  { firstName: 'Paca', surname: 'Pacheco', phone: '000333111' },
  { firstName: 'Pepa', surname: 'Perez', phone: '333345111' },
  { firstName: 'Francisca', surname: 'Fernandez', phone: '000123451' }
];

const firstName = document.querySelector('.firstName');
const surname = document.querySelector('.surname');
const phone = document.querySelector('.phone');

function handleAutocomplete(event) {
  if (event.currentTarget.value === 'paca') {
    firstName.value = autocompletado[0].firstName;
    surname.value = autocompletado[0].surname;
    phone.value = autocompletado[0].phone;
  } else if (event.currentTarget.value === 'pepa') {
    firstName.value = autocompletado[1].firstName;
    surname.value = autocompletado[1].surname;
    phone.value = autocompletado[1].phone;
  } else if (event.currentTarget.value === 'francisca') {
    firstName.value = autocompletado[2].firstName;
    surname.value = autocompletado[2].surname;
    phone.value = autocompletado[2].phone;
  }
}

const select = document.querySelector('.select');

select.addEventListener('change', handleAutocomplete);