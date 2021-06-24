const toggle = document.querySelector(".toggle-button");
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const navBar = document.getElementsByClassName("navBar")[0];


toggle.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
    navBar.classList.toggle('active')
    
})