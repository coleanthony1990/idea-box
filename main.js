//Query selectors------------>
var titleInput = document.querySelector('.title')
var bodyInput = document.querySelector('.bodyForm')
var saveButton = document.querySelector('.saveButton')
var ideaGrid = document.querySelector('.ideaCardsGrid')
var cardsContainer = document.querySelector('.cardsContainer')
var inputForm = document.querySelector('.inputForm')


window.onload = saveButton.classList.add('disabled-save-btn')
window.onload = saveButton.disabled = true





var collection = [];
//Event Listeners------------>
saveButton.addEventListener('click', addCard);
inputForm.addEventListener('keyup', disableButton)
cardsContainer.addEventListener('click', deleteCard)

//Functions------------------>

 function disableButton(){
   if (titleInput.value && bodyInput.value != ""){
     saveButton.classList.remove('disabled-save-btn')
     saveButton.disabled = false
   } else {
     saveButton.classList.add('disabled-save-btn')
     saveButton.disabled = true
   }
 }




function createIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  collection.push(newCard)
  return newCard
}

function addCard(){
  var newIdea = createIdea()
  makeCard(newIdea)
  titleInput.value = ""
  bodyInput.value = ""
  disableButton()
}

function makeCard(newIdea){
  cardsContainer.insertAdjacentHTML("afterbegin", `<article class='ideaCardsGrid' id='${newIdea.id}'>
    <header>
      <button class='starButton star-${newIdea.star}' id='starButton'><img src='Assets/star.svg' width='35px'/></button>
      <button class='deleteButton' id='deleteButton'><img class='deleteButton' src='Assets/delete.svg' width='35px'/></button>
    </header>
    <section class='cardBody'>
      <h2>${newIdea.title}</h2>
      <p>${newIdea.body}</p>
    </section>
    <footer>
      <button type='button' class='commentButton' id='commentButton'><img src='Assets/comment.svg' width= '35px'/></button>
      <label for='commentButton'>Comment</label>
    </footer>
  </article>`
  )
}

// function starButton(event) {
//    event.target.className.contains('star-true')
//   //   idea.updateIdea();
//     console.log('hello')

function deleteCard(){
  if(event.target.classList.contains('deleteButton')){
    event.target.closest('article').remove()
    for (var i = 0; i < collection.length; i++) {
      collection.splice(i,1)
    }
  }
}
