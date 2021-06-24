const player = document.querySelector(".player")
let row = 1;
let col = 1;
let position = "";
let didItMoveX = false;
let didItMoveY = false;
const play = setInterval(()=>{
    if(position !== ""){

    if(position === "left"){
    col--;
 
    }

    if(position === "right"){
        col++;
       
    }
    if(position === "up"){
      
        row--;
    }
    if(position === "down"){
    
        row++;
    }

    if((didItMoveX && didItMoveY) && (player.style.gridRowStart == 1 ||player.style.gridRowEnd == 1 || player.style.gridColumnStart == 1|| player.style.gridColumnEnd == 1)){
        alert("You are dead")
        clearInterval(play);
        location.reload();
    }
    else{
    player.style.gridRowStart = row;
    player.style.gridRowEnd = (row+1);
    player.style.gridColumnStart = col;
    player.style.gridColumnEnd = (col+1);
    }
}
}, 500);

document.addEventListener("keypress", (e)=>{
 if(e.key === "w"){
     position = "up"
     didItMoveY = true;
 }
 if(e.key === "a"){
    position = "left"
    didItMoveY = true;
}
if(e.key === "d"){
    position = "right"
    didItMoveX = true;
}
if(e.key === "s"){
    position = "down"
    didItMoveX = true;
}
})