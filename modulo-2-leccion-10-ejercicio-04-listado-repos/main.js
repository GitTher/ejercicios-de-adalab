'use strict';

function getOrg() {
  const nameInput = document.querySelector('.nameinput').value;
  fetch(`https://api.github.com/orgs/${nameInput}`)
    .then((response) => response.json())
    .then((data) => {
      const repos = data.repos_url;
      console.log(repos);
      return fetch(repos);
    })
    .then((reposResponse) => reposResponse.json())
    .then((reposData) => {
      const ul = document.querySelector('ul');
      let ulContent = '';
      for (let index = 0; index < reposData.length; index++) {
        const repo = reposData[index].name;
        console.log(repo);
        const repoContent = `<li>${repo}</li>`;
        ulContent += repoContent;
      }
      ul.innerHTML = ulContent;
    });
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getOrg);

/* Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. 

La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. 

Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. 

Para ello vamos a hacer lo siguiente:

Preparar un input con un botón para que la usuaria introduzca la organización.

Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.

Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.

En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).*/
