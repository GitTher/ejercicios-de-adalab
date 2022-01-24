'use strict';

function getUser() {
  const nameInput = document.querySelector('.nameinput').value;
  fetch(`https://api.github.com/users/${nameInput}`)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector('.name');
      name.innerHTML = data.name;
      const repositories = document.querySelector('.repositories');
      repositories.innerHTML = data.public_repos;
      const img = document.querySelector('img');
      img.src = data.avatar_url;
      img.alt = data.name;
    });
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getUser);

/* Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. 

Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.


Vamos a crear una página en la que haya un input de texto y un botón de buscar. 

El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

nombre

número de repositorios

avatar (imagen) */
