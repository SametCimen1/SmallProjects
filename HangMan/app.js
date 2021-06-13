var array = [
["java", "javaScript", "python", "c","swift", "typescript", "go", "php", "rust","ada", "ruby"], // 12 index
["bengali", "turkish", "english", "franch","italian", "german", "chinese", "japanese","hindi", "spanish","russian", "urdu","indonesian"], // 12 index
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
var ans = document.querySelector(".answer");

ans.addEventListener("click" , ()=>{
    location.reload();
return false;
})


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
    word = array[row][Math.floor(Math.random() * array[row].length)];
    letter = word.split("");
    mySubject.textContent = "Guess the "+subject;
    console.log(`${subject} ${word}`);
    addEvent();
    showWords();
    var varGetWord = document.querySelector(".word").textContent.split(" ");
    console.log(varGetWord);
}
const isItInTheWord = (myWord)=>{
  let myArr = [];
    letter.forEach((temp, index) =>{
    if(myWord === temp){
        myArr.push(index);
    }
  })
  return myArr;
  
}

const clicked = (e) =>{
const myLetter = e.target.childNodes[0].data;
const indexes = isItInTheWord(myLetter);

if(indexes.length <= 0){
    numOfWrong ++;
    if(numOfWrong >= 6){
        hangMan.src = "img/"+numOfWrong+".png"
        ans.textContent = "You lost answer was: " + word + " click here to play again";
    }
    else{
    hangMan.src = "img/"+numOfWrong+".png"
    }
}
// letter is in the word;
else{
  varGetWord = document.querySelector(".word").textContent.split(" ");
  const getElem = document.querySelector(".word");
  for(let i = 0; i<varGetWord.length; i++){
      if(varGetWord[i] === "_"){
         for(let x = 0; x<indexes.length; x++){
            console.log(i + " " +  indexes[x])
             if(i === indexes[x]){
                varGetWord[i] = myLetter;
                console.log(varGetWord);
             }
         }
      }
  }
  getElem.textContent = varGetWord.join(" ");
  console.log( "letter length "+ letter.join(""));
  console.log( "getWord length "+ varGetWord.join(""));
  if(letter.join("") === varGetWord.join("")){
    ans.textContent = "You won, click to play again"
  }
}
}

const addEvent = ()=>{
    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", (e)=>{
            clicked(e);
            buttons[i].disabled = "disabled";
            buttons[i].style.backgroundColor = "red";
        })
    }
}

const showWords = () =>{
    const myWord = document.querySelector(".word");
    for(let i = 0; i<letter.length; i++){
        myWord.textContent += "_ ";
    } 

}