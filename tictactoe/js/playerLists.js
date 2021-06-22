const player2 = document.querySelector(".playertwo")
const player1 = document.querySelector(".playerone")


player1.addEventListener("click", ()=>{
    player2Name.style.display = "none"
})
player2.addEventListener("click", ()=>{
    player2Name.style.display = "block"
})