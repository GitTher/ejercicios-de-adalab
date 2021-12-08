'use strict'

const resultado = (importe) => `Precio sin IVA: ${importe}, IVA: ${(importe * 21)/100} y total: ${importe + ((importe * 21)/100)}`;


console.log(resultado(120));