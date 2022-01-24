'use strict'

const text = document.querySelector('.text');
const container = document.querySelector('.container');

function addLorem (){
  container.innerHTML += `<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo,
  deleniti optio voluptatem velit iste non, quisquam quam mollitia autem
  veritatis. Eaque, sequi id architecto ratione odio earum nobis autem!
</p>`
}

text.addEventListener('mouseover', addLorem);