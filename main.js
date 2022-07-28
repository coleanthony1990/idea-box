//Query selectors------------>
var titleInput = document.querySelector('.title')
var bodyInput = document.querySelector('.bodyForm')
var saveButton = document.querySelector('.saveButton')
var ideaGrid = document.querySelector('.ideaCardsGrid')









var collection = [];
//Event Listeners------------>
saveButton.addEventListener('click', createIdea);











//Functions------------------>


function createIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  collection.push(newCard)
  console.log(collection[0])
  // return newCard
}

//We want to instantiate a new Idea class with the input value from titleInput and bodyInput.
//We then want to take that new Idea object and put it in an array.
//We then want to change the innerText of the cards based on the contents of the array.
//
