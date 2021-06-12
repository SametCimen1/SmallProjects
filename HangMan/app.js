var array = [
["java", "javaScript", "python", "c", "c sharp", "c plus plus", "swift", "typescript", "go", "php", "rust","ada", "ruby"], // 12 index
["bengali", "turkish", "english", "franch","italian", "german", "chinese", "japanese","hindi", "spanish","russian", "urdu","Indonesian "], // 12 index
["apricot", "apple","lemon","broccoli", "cucumber", "garlic", "grapes", "mushrooms", "onion", "peppers", "pumpkin", "spinach", "banana"] // 0-12 

] // index 0 = "programming language" index 1 = "language" index = 2 "fruit&vegatable" 
// 0 - 2
var word = "";
var subject = "";
var letter = [];
var mySubject = document.querySelector(".guessWhat");
var numOfWrong = 0;
var buttons = document.querySelectorAll(".button");
var hangMan = document.querySelector(".myImage");
window.onload=function(){
    getWord();
}
const getWord = () =>{
    var row =  Math.floor(Math.random() * 3)
    if(row === 0){
        subject = "programming language"
    }
    else if(row === 1){
        subject = "language"
    }
    else if(row === 2){
        subject = "fruit&vegatable"
    }
    word = array[row][Math.floor(Math.random() * 13)];
    letter = word.split("");
    mySubject.textContent = "Guess the "+subject;
    console.log(`${subject} ${word}`);
    addEvent();
    
}
const isItInTheWord = (myWord)=>{
  let bool = letter.some(temp =>{
    if(myWord === temp){
        return true;
    }
  })
  return bool;
  
}

const clicked = (e) =>{
if(!(isItInTheWord(e.target.childNodes[0].data))){
    numOfWrong ++;
    if(numOfWrong === 6){
        let ans = document.querySelector(".answer");
        ans.textContent = "You lost answer was: " + word;
    }
    else{
    hangMan.src = "img/"+numOfWrong+".png"
    }
}
}

const addEvent = ()=>{
    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", (e)=>{
            clicked(e);
        })
    }
}