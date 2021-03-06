

const form = document.getElementById('form');
const card = document.getElementById('card');
const message = document.getElementById("message")
const greeting= document.getElementById("greeting")
const header = document.querySelector("h1")





form.addEventListener('submit', createCard);




function createCard(event) {
    event.preventDefault();
    card.classList.add('styling')
    card.innerHTML = `${greeting.value} <br> ${message.value}`;
    form.remove()
    header.remove()

  }





