

const form = document.getElementById('form');
const card = document.getElementById('card');
const message = document.getElementById("message")
const greeting= document.getElementById("greeting")





form.addEventListener('submit', logSubmit);




function logSubmit(event) {
    event.preventDefault();
    card.innerHTML = `${greeting.value} <br> ${message.value}`;

  }





