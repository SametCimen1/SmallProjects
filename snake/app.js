const player = document.querySelector(".player")
const food = document.querySelector(".food")
const grid = document.querySelector("main")
const ComputedGrid = window.getComputedStyle(grid);
let numberOfTimesAte = 1;
let isHor = false;

let rowCount = ComputedGrid.getPropertyValue("grid-template-rows").split(" ").length;
let colCount = ComputedGrid.getPropertyValue("grid-template-columns").split(" ").length;

let randomRow = Math.floor(Math.random() * rowCount)
let randomCol = Math.floor(Math.random() * colCount)
while(randomRow === 0 || randomCol === 0){
    randomRow = Math.floor(Math.random() * rowCount)
    randomCol = Math.floor(Math.random() * colCount)  
}

console.log(randomRow)
console.log(randomCol)

food.style.gridRowStart = randomRow;
food.style.gridRowEnd = (randomRow+1);

food.style.gridColumnStart = randomCol;
food.style.gridColumnEnd = (randomCol+1);
// player.style.gridRowStart = row;
// player.style.gridRowEnd = (row+1);
// player.style.gridColumnStart = col;
// player.style.gridColumnEnd = (col+1);
let row = 1;
let col = 1;
let position = "";
let didItMoveX = false;
let didItMoveY = false;
const play = setInterval(()=>{
    if(position !== ""){

    if(position === "left"){
    col--;
    isHor = true;
    }

    if(position === "right"){
        col++;
        isHor = true;
    }
    if(position === "up"){
        isHor = false;
        row--;
    }
    if(position === "down"){
        isHor = false;
        row++;
    }

    if((didItMoveX && didItMoveY) && (player.style.gridRowStart == 1 ||player.style.gridRowEnd == 1 || player.style.gridColumnStart == 1|| player.style.gridColumnEnd == 1)){
        alert("You are dead")
        clearInterval(play);
        location.reload();
    }
    else{
        if(isHor === true){
            player.style.gridRowStart = row;
            player.style.gridRowEnd = (row+1);
            player.style.gridColumnStart = col;
            player.style.gridColumnEnd ="span " + numberOfTimesAte;
        }
        else{
            player.style.gridRowStart = row;
            player.style.gridRowEnd = "span " + numberOfTimesAte;
            player.style.gridColumnStart = col;
            player.style.gridColumnEnd = (col+1);
        }
    }

    if(food.style.gridRowStart ===  player.style.gridRowStart && food.style.gridColumnStart === player.style.gridColumnStart){
        randomRow = Math.floor(Math.random() * rowCount)
        randomCol = Math.floor(Math.random() * colCount)  
        food.style.gridRowStart = randomRow;
        food.style.gridRowEnd = (randomRow+1);

        food.style.gridColumnStart = randomCol;
        food.style.gridColumnEnd = (randomCol+1);
        numberOfTimesAte++;
    }
}
}, 500);

document.addEventListener("keydown", (e)=>{
    console.log(e)
 if(e.key === "w" || e.key === "ArrowUp"){
     position = "up"
     didItMoveY = true;
 }
 if(e.key === "a" || e.key === "ArrowLeft"){
    position = "left"
    didItMoveY = true;
}
if(e.key === "d" || e.key === "ArrowRight"){
    position = "right"
    didItMoveX = true;
}
if(e.key === "s" || e.key === "ArrowDown"){
    position = "down"
    didItMoveX = true;
}
})