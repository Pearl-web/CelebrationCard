

const form = document.getElementById('form');
const card = document.getElementById('card');
const outerCard = document.getElementById('outerCard');


const message = document.getElementById("message")
const greeting= document.getElementById("greeting")
const header = document.querySelector("h1")
const imageToDisplay = document.getElementById("newImage")







  async function changeToCard(event){

  event.preventDefault();
  const response = await fetch(birthdayurl);
  const data = await response.json()
  const image = await data.urls.regular
  imageToDisplay.src= image; 
  outerCard.classList.add('outerStyling')
  card.classList.add('styling')
  imageToDisplay.classList.add('newImage')

  card.innerHTML = `${greeting.value} <br> ${message.value}`;
  form.remove()
  header.remove()
  
  
};


form.addEventListener('submit', changeToCard)

 // async function getNewImage(){
  //   return fetch(birthdayurl)
  //   .then(response => response.json())
  //   .then(data => {
  //     return data.urls.thumb
  //   })
  // };





// async function createCard(event) {
//     event.preventDefault();
    
//     card.classList.add('styling')
//     card.innerHTML = `${greeting.value} <br> ${message.value}`;
//     imageToDisplay.src= randomImage;
//     form.remove()
//     header.remove()
//     let randomImage = await getNewImage();

//   }



  const birthdayurl = 'https://api.unsplash.com/photos/random?client_id=zxe87r8bnEWufIZGacW_9OUU_d2e1afypUiC6KVE9OQ&query="birthdaycake"'





  // async function getNewImage(){
  //   return fetch(birthdayurl)
  //   .then(response => response.json())
  //   .then(data => {
  //     return data.urls.thumb
  //   })
  // };