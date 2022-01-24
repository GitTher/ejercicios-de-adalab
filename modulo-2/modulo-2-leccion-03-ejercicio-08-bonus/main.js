'use strict'

const currentYear = 2021;
const title = document.querySelector('.title');
const counter = document.querySelector('.counter');

function calculateYear() {
  if (currentYear % 4 === 0) {
    title.innerHTML = "Este año es bisiesto"

  } else if ((currentYear + 1) % 4 === 0) {
    counter.innerHTML = currentYear + 1;
  } else if ((currentYear + 2) % 4 === 0) {
    counter.innerHTML = currentYear + 2;
  } else if ((currentYear + 3) % 4 === 0) {
    counter.innerHTML = currentYear + 3;
  }
}

calculateYear();