'use strict'

const resultado = function boxWidth (isBorderBox,boxWidth,boxPadding,boxBorder) {

    const borderBoxContent = boxWidth - (boxPadding*2) - (boxBorder*2);
    const contentBoxContainer = boxWidth + (boxPadding*2) + (boxBorder*2);

    if (isBorderBox === true) {
        return 'El ancho del contenido es: ' + borderBoxContent + ' px y el ancho total de la caja es: ' + boxWidth + ' px.';
      } else {
        return 'El ancho del contenido es: ' + boxWidth + ' px y el ancho total de la caja es: ' + contentBoxContainer + ' px.';
      }
    }

// border box
console.log(resultado(true, 100, 10, 5));

// content box
console.log(resultado(false, 100, 10, 5));



