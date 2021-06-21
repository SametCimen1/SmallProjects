var elem = document.querySelectorAll(".myName");
var links = document.querySelectorAll(".myLink");
for(let i = 0; i<elem.length; i++){
elem[i].addEventListener('mouseover', ()=>{
  elem[i].classList.add("mouseMovedInside");
});
 
 
elem[i].addEventListener("mouseout", ()=>{
  elem[i].style.opacity = 0;
  elem[i].classList.add("mouseMovedOutside")
  elem[i].classList.remove("mouseMovedInside");
setTimeout(() => {
   
  elem[i].style.opacity = ''
  }, 5)
  elem[i].addEventListener("animationend", animationEnd);
})
}

for(let i = 0; i<links.length; i++){
  links[i].addEventListener('mouseover', ()=>{
    links[i].classList.add("mouseMovedInside");
  });
   
   
  links[i].addEventListener("mouseout", ()=>{
    links[i].style.opacity = 0;
    links[i].classList.add("mouseMovedOutside")
    links[i].classList.remove("mouseMovedInside");
  setTimeout(() => {
     
    links[i].style.opacity = ''
    }, 5)
    links[i].addEventListener("animationend", animationEnd);
  })
  }
   
   
 
 
 
 
 
function createBubble(){
  const area = document.querySelector(".bouble");
  const createElem = document.createElement('span');
  createElem.style.width = "1px";
  createElem.style.height = "1px";
  createElem.style.left = Math.random() * (innerWidth-10) +"px";
 
  area.appendChild(createElem);
  console.log()
  setTimeout(()=>{
    createElem.remove();
  }, 10000)
}
 
setInterval(createBubble,200)