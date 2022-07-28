//Query selectors------------>
var titleInput = document.querySelector('.title')
var bodyInput = document.querySelector('.bodyForm')
var saveButton = document.querySelector('.saveButton')
var ideaGrid = document.querySelector('.ideaCardsGrid')
var cardsContainer = document.querySelector('.cardsContainer')








var collection = [];
//Event Listeners------------>
saveButton.addEventListener('click', addCard);











//Functions------------------>


function createIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  collection.push(newCard)

  return newCard
}

function addCard(){
  var newIdea = createIdea()
  makeCard(newIdea)
    console.log(newIdea.title)
}

function makeCard(newIdea){
  cardsContainer.insertAdjacentHTML("afterbegin", `<article class='ideaCardsGrid' id='${newIdea.id}'>
    <header>
      <button class='starButton' id='starButton'><img src='Assets/star.svg' width='35px'/></button>
      <button class='deleteButton' id='deleteButton'><img src='Assets/delete.svg' width='35px'/></button>
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

//We want to instantiate a new Idea class with the input value from titleInput and bodyInput.
//We then want to take that new Idea object and put it in an array.
//We then want to change the innerText of the cards based on the contents of the array.
//
