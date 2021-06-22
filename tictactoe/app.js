let isItX = true;
const buttons = document.querySelectorAll(".box");
const temp = document.querySelector(".cancel");
temp.addEventListener("click", (e)=>{
    e.preventDefault();
    const bg = document.querySelector(".bg-modal");
    bg.style.display = "none"
})
let isItOver = false;
console.log(buttons)
buttons.forEach((elem)=>{
 elem.addEventListener("click", ()=>{
     if(isItOver){
         return;
     }
    if(elem.textContent == "" ) {
    if(isItX){
       elem.textContent += "X";
     }
     else{
        elem.textContent += "O";
     }
     check()
    
     isItX = !isItX;
    }
     
 })
})

const check = () =>{
    let howManyFull = 1;
    for(let num = 0; num< 9; num++){
         if(buttons[num].textContent !== ""){
            howManyFull++;
             // right && left check
             if(num%3 === 0 &&buttons[num+1] != null &&buttons[num+2] != null && buttons[num].textContent !== "" &&buttons[num].textContent === buttons[num+1].textContent && buttons[num].textContent === buttons[num+2].textContent){
                console.log(buttons[num+1].textContent); 
                console.log(buttons[num+2].textContent); 
                alert("you won right check");
                 isItOver = true;
                 return;
             }
            // top && bottom check
             if((num === 6 || num === 7 || num === 8) &&buttons[num-3] != null &&buttons[num-6] != null  && buttons[num].textContent !== "" && buttons[num].textContent === buttons[num-3].textContent && buttons[num].textContent === buttons[num-6].textContent){
                alert("you won top check");
                isItOver = true;
                return;
            }
              // top left to bottom right check
              if(num === 0 &&buttons[num+4] != null &&buttons[num+8] != null  && buttons[num].textContent !== "" && buttons[num].textContent === buttons[num+4].textContent && buttons[num].textContent === buttons[num+8].textContent){
                alert("you won diagnol check");
                isItOver = true;
                return;
            }
            // top right to bottom left check
            if(num === 2 &&buttons[num+2] != null &&buttons[num+4] != null  && buttons[num].textContent !== "" && buttons[num].textContent === buttons[num+2].textContent && buttons[num].textContent === buttons[num+4].textContent){
                alert("you won diagnol check");
                isItOver = true;
                return;
            }

            
         }
    }
    if(howManyFull === 10){
       alert("Draw");
    }
}