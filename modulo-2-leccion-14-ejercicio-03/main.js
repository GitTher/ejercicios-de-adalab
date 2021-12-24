'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
    const time = document.querySelector('.time');
    const unit = document.querySelector('.unidad');
    if (counter < 59) {
        counter++;
        time.innerHTML = counter;

    } else if (counter = 59) {
        time.innerHTML = 1;
        unit.innerHTML = 'minuto';
    }

};

setInterval(incrementAndShowCounter, 1000);

/* Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". 

Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. 

Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min". */
