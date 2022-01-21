let elHeader = document.querySelector(".site-header");
let elHeaderHumburgurg = document.querySelector(".hamburger");
 
elHeaderHumburgurg.addEventListener('click' , function(){
    elHeader.classList.toggle("site-header--open")
})
