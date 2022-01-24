'use strict'

const main = document.querySelector(".js-main");

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

function render() {
  main.innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    console.log(tasks[index]);
    if (tasks[index].completed) {
      main.innerHTML += `<li class="completed"><input id=${index} class="js-input" type="checkbox" checked> ${tasks[index].name}</li>`;
    } else {
      main.innerHTML += `<li><input id=${index} class="js-input" type="checkbox">${tasks[index].name}</li>`;
    }
  }

  const allInput = document.querySelectorAll(".js-input");
  console.log(allInput);
  for (const eachInput of allInput) {
    eachInput.addEventListener("click", handleClickTask);
  }
}


function handleClickTask(event) {

  console.log(event.currentTarget.id);
  const posTask = event.currentTarget.id;
  if (tasks[posTask].completed === true) {
    tasks[posTask].completed = false;
  } else {
    tasks[posTask].completed = true;
  }
  console.log(tasks);
  render();
}

render();






/* const counterTotal = document.querySelector('.taskCounter__total');

const counterDone = document.querySelector('.taskCounter__done');

const counterToDo = document.querySelector('.taskCounter__toDo'); */