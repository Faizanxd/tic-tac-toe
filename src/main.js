import './style.css'

const editButton1 = document.getElementById("edit-1");
const editButton2 = document.getElementById("edit-2");
const editOverlay = document.getElementById("overlay");
const cancelButton = document.getElementById("overlay-cancel");
const startButton = document.getElementById("start-game");
const gameOverlay = document.getElementById("active-game");

const handleClick1 = editButton1.addEventListener("click", ()=>{
    if(editOverlay.classList.contains("hidden")){
        editOverlay.classList.remove("hidden")
    }
    else
    editOverlay.classList.add("hidden")

});

const handleClick2 = editButton2.addEventListener("click", ()=>{
    if(editOverlay.classList.contains("hidden")){
        editOverlay.classList.remove("hidden")
    }
    else
    editOverlay.classList.add("hidden")

});

// const handleClick3 = cancelButton.addEventListener("click", ()=>{
//     if(editOverlay.classList.contains("hidden")){
//         editOverlay.classList.remove("hidden")
//     }
// });

const handleClick4 = startButton.addEventListener("click", ()=>{
    if(gameOverlay.classList.contains("hidden")){
        gameOverlay.classList.remove("hidden")
    }
});
