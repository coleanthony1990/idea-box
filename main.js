//Query selectors and global variables ------------>
var titleInput = document.querySelector('.title')
var bodyInput = document.querySelector('.bodyForm')
var saveButton = document.querySelector('.saveButton')
var ideaGrid = document.querySelector('.ideaCardsGrid')
var cardsContainer = document.querySelector('.cardsContainer')
var inputForm = document.querySelector('.inputForm')

var collection = []
//Event Listeners------------>
saveButton.addEventListener('click', addCard)
inputForm.addEventListener('keyup', disableButton)
cardsContainer.addEventListener('click', updateCard)

window.onload = saveButton.classList.add('disabled-save-btn')
window.onload = saveButton.disabled = true
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

function createIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value)
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

function makeCard() {
  var starImg = ''
  cardsContainer.innerHTML = ''
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].star) {
      starImg = "./Assets/star-active.svg"
    } else {
      starImg = "./Assets/star.svg"
    }
    cardsContainer.innerHTML += `<article class='ideaCardsGrid' id='${collection[i].id}'>
    <header>
      <button class='starButton ${collection[i].star}'><img class='starButton' id='${collection[i].id}' src='${starImg}' width='35px'/></button>
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
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].id === parseInt(event.target.id)) {
      collection.splice(i, 1)
      makeCard()
    }
  }
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
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].id === parseInt(event.target.id)) {
      collection[i].star = !collection[i].star
      makeCard()
    }
  }
}
