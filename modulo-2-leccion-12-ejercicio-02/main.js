'use strict';


/* Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid

Haz lo mismo para París y Nueva York */


const cityInput = document.querySelector('.select');
console.log(cityInput.value);

const cityImage = document.querySelectorAll('.cityImage');

function handleCityImage() {
  if (cityInput.value === 'paris') {
    for (const eachCity of cityImage) {
      eachCity.src = "https://infoliteraria.com/wp-content/uploads/2020/11/Paris-min-300x300.jpg";
    }

  } else if (cityInput.value === 'madrid') {
    for (const eachCity of cityImage) {
      eachCity.src = "https://www.madridtourstickets.com/wp-content/uploads/2018/01/Highlights-madrid-300x300.jpg";
    }

  } else if (cityInput.value === 'nuevayork') {
    for (const eachCity of cityImage) {
      eachCity.src = "https://image.nuevayork.es/wp-content/uploads/2019/05/Top-10-in-New-York-Empire-State-Building.png.webp";
    }

  }
}

cityInput.addEventListener('change', handleCityImage);