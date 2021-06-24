
var links = document.querySelectorAll(".socialMedia");
var heyText = document.querySelector(".hey");
heyText.addEventListener("mouseover", ()=>{
  heyText.classList.add("mouseHoverInText")
  heyText.classList.remove("mouseHoverOutText")
})
heyText.addEventListener("mouseout", ()=>{
  heyText.classList.remove("mouseHoverInText")
  heyText.classList.add("mouseHoverOutText")
})
for(let i = 0; i<links.length; i++){
  links[i].addEventListener("mouseout", ()=>{
    links[i].classList.remove("mouseHoverIn")
    links[i].classList.add("mouseHoverOut")
  })
  links[i].addEventListener("mouseover", ()=>{
    links[i].classList.remove("mouseHoverOut")
    links[i].classList.add("mouseHoverIn")
  })
  }
   
   
const isItInList = elem =>{
  for(let i = 0; i <elem.length; i++){
    if(elem[i] === "hovored"){}
  }
}
 
 
