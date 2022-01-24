'use strict';

const adalabers = [{
    name: 'María',
    age: 29,
    job: 'diseñadora'
}, {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química'
}, {
    name: 'Susana',
    age: 34,
    job: 'periodista'
}, {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}, {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora'
}];

console.log(adalabers);

function countAdalabers() {
    console.log('Hay ' + adalabers.length + ' adalabers en el listado');
};

countAdalabers();

function averageAge() {
    let acc = 0;
    for (let index = 0; index < adalabers.length; index++) {
        acc = (acc + adalabers[index].age);

    }
    let media = acc / adalabers.length;
    console.log('La edad media de las adalabers es ' + media);

}

averageAge();

function theYoungest() {
    let youngest = 999;
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].age < youngest) {
            youngest = adalabers[i].age;
        }
    }
    console.log('La adalaber más joven tiene ' + youngest + ' años');

};

theYoungest();


/* Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

María, 29 años, diseñadora
Lucía, 31 años, ingeniera química
Susana, 34 años, periodista
Rocío, 25 años, actriz
Inmaculada, 21 años, diseñadora

En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

Una función countAdalabers que devuelve el número de adalabers en el listado.
Una función averageAge que devuelve la media de edad de listado.
Una función theYoungest que devuelve el nombre de la adalaber más joven.
Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto. */
