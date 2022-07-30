//Query selectors------------>
var titleInput = document.querySelector('.title')
var bodyInput = document.querySelector('.bodyForm')
var saveButton = document.querySelector('.saveButton')
var ideaGrid = document.querySelector('.ideaCardsGrid')
var cardsContainer = document.querySelector('.cardsContainer')
var inputForm = document.querySelector('.inputForm')



window.onload = saveButton.classList.add('disabled-save-btn')
window.onload = saveButton.disabled = true

var whiteStar = 'Assets/star.svg'
var redStar = 'Assets/star-active.svg'



var collection = [];
//Event Listeners------------>
saveButton.addEventListener('click', addCard);
inputForm.addEventListener('keyup', disableButton)
cardsContainer.addEventListener('click', updateCard)

//Functions------------------>

function disableButton() {
  if (titleInput.value && bodyInput.value != "") {
    saveButton.classList.remove('disabled-save-btn')
    saveButton.disabled = false
  } else {
    saveButton.classList.add('disabled-save-btn')
    saveButton.disabled = true
  }
}



//var newCard = new Idea(titleInput.value, bodyInput.value);

function createIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  collection.push(newCard)
  return newCard
}

function addCard() {
  var newIdea = createIdea()
  makeCard(newIdea)
  titleInput.value = ""
  bodyInput.value = ""
  disableButton()
}

function makeCard(newIdea) {
  cardsContainer.innerHTML = ''
  for (var i = 0; i < collection.length; i++) {
    cardsContainer.innerHTML += `<article class='ideaCardsGrid' id='${collection[i].id}'>
    <header>
      <button class='starButton ${collection[i].star}'><img class='starButton' id='${collection[i].id}' src='${whiteStar}' width='35px'/></button>
      <button class='deleteButton' id='${collection[i].id}'><img class='deleteButton' id='${collection[i].id}' src='Assets/delete.svg' width='35px'/></button>
    </header>
    <section class='cardBody'>
      <h2>${collection[i].title}</h2>
      <p>${collection[i].body}</p>
    </section>
    <footer>
      <button type='button' class='commentButton' id='commentButton'><img src='Assets/comment.svg' width= '35px'/></button>
      <label for='commentButton'>Comment</label>
    </footer>
  </article>`
  }
}

function deleteCard(event) {

  console.log(event.target)
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i].id)
    if (collection[i].id === parseInt(event.target.id)) {

      collection.splice(i, 1) // removes the data from the array
    }
  }
  makeCard()
}

function updateCard(event) {
  if (event.target.classList.contains('starButton')) {
    activateStarButton(event)
  }
  if (event.target.classList.contains('deleteButton')) {
    deleteCard(event)
  }
}

function activateStarButton(event) {
  console.log('beast')
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i])
    if (collection[i].id === parseInt(event.target.id)) {
      console.log(collection[i].id)
      changeStar()
    }
  }
}

function changeStar() {
  console.log('human')
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i].star)
    if (collection[i].star === false) {
      collection[i].star = true
      console.log(collection[i].star)
      activateStar()
    } else {
      collection[i].star === true
      collection[i].star = false
      deActivateStar()
      console.log('dog')
    }
  }
}

function activateStar() {
  console.log('hi')
  event.target.src = redStar
}

function deActivateStar() {
  event.target.src = whiteStar
}
