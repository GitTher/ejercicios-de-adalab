'use strict'

const navItem = document.querySelectorAll('.nav__list--link');

function handlePreventDefault(event) {
    event.preventDefault();
    console.log('funchiona');
}

for (const eachNavItem of navItem) {
    eachNavItem.addEventListener('click', handlePreventDefault)
}
