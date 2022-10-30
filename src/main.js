import './style.css'

const editButton1 = document.getElementById("edit-1");
const editButton2 = document.getElementById("edit-2");
const editOverlay = document.getElementById("overlay");
const cancelButton = document.getElementById("overlay-cancel");
const startButton = document.getElementById("start-game");
const gameOverlay = document.getElementById("game-board");
const backDrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");

const handleClick1 = editButton1.addEventListener("click", ()=>{
    if(editOverlay.classList.contains("hidden")){
        editOverlay.classList.remove("hidden")
        backDrop.classList.add("bd")
    }
    else 
    editOverlay.classList.add("hidden")
   backDrop.classList.remove("bd")

});

const handleClick2 = editButton2.addEventListener("click", ()=>{
    if(editOverlay.classList.contains("hidden")){
        editOverlay.classList.remove("hidden")
        backDrop.classList.add("bd")
    }
    else
    editOverlay.classList.add("hidden")
    backDrop.classList.remove("bd")

});

const handleClick3 = cancelButton.addEventListener("click", ()=>{
    if(editOverlay.classList.contains("hidden")){
        editOverlay.classList.remove("hidden")
        }
        
});

const handleClick4 = startButton.addEventListener("click", ()=>{
    if(gameOverlay.classList.contains("hidden")){
        gameOverlay.classList.remove("hidden")
    }
    else
    gameOverlay.classList.add("hidden")
});

const formSubmit = formElement.addEventListener("submit",(e)=>{
              e.preventDefault()
              const formData = new FormData(e.target)
              const enteredPlayerName = formData.get('player-name')
              console.log(enteredPlayerName)
})