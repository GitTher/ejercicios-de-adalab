'use strict'
const getInfo = document.querySelector('.getInfo');
const fillInfo = document.querySelector('.fillInfo');

function insertInfo(event) {
fillInfo.innerHTML = event.currentTarget.value;
}

getInfo.addEventListener('keyup', insertInfo);
