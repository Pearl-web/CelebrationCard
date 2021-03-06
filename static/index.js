

const form = document.getElementById('form');
const card = document.getElementById('card');
const message = document.getElementById("message")
const greeting= document.getElementById("greeting")
const header = document.querySelector("h1")
const imageToDisplay = document.getElementById("newImage")





form.addEventListener('submit', async (event) => { 
  event.preventDefault();
    
  card.classList.add('styling')
  card.innerHTML = `${greeting.value} <br> ${message.value}`;
  form.remove()
  header.remove()
  let randomImage = await getNewImage();
  imageToDisplay.src= randomImage;
  


});




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





  async function getNewImage(){
    return fetch(birthdayurl)
    .then(response => response.json())
    .then(data => {
      return data.urls.thumb
    })
  };