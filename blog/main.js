
var links = document.querySelectorAll(".socialMedia");
var heyText = document.querySelector(".hey");
var logoText = document.querySelector(".logo");

heyText.addEventListener("mouseover", ()=>{
  heyText.classList.add("mouseHoverInText")
  heyText.classList.remove("mouseHoverOutText")
})
heyText.addEventListener("mouseout", ()=>{
  heyText.classList.remove("mouseHoverInText")
  heyText.classList.add("mouseHoverOutText")
})


logoText.addEventListener("mouseover", ()=>{
  logoText.classList.add("mouseHoverInLogo")
  logoText.classList.remove("mouseHoverOutLogo")
})
logoText.addEventListener("mouseout", ()=>{
  logoText.classList.remove("mouseHoverInLogo")
  logoText.classList.add("mouseHoverOutLogo")
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
 
 
