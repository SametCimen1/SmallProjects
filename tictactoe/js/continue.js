const btn = document.querySelector(".button");
let player2Name = document.querySelector("#player2");
const player1Name = document.querySelector("#player1");
const screen = document.querySelector(".bg-modal");
const whoWon = document.querySelector(".whoWon");
const myOver = document.querySelector(".over");
const finishButton = document.querySelector(".lastButton")

finishButton.addEventListener("click", ()=>{
    location.reload();
})


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(player2Name.style.display === "none" && player1Name.value !== ""){
        screen.style.display = "none"
    }
   if(player1Name.value !== "" && player2Name.value !== "")   {
      screen.style.display = "none"
   } 
})
function over(isItX){
    myOver.style.display = "flex";
    if(isItX){
        whoWon.innerHTML = player1Name.value + " won"
    }
    if(!isItX){
        if(player2Name.style.display === "none"){
            whoWon.innerHTML += "Computer won"
        }
        else{
        whoWon.innerHTML += player2Name.value + " won"
        }
    }
}

function draw(){

}