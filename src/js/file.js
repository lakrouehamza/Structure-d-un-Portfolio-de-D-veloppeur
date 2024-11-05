var log = document.getElementById('logo');
var navbar = document.getElementById('navbar');
var menu = document.querySelectorAll('nav_aid');
// console.log(log.style.display);

log.addEventListener("click",function(){
    navbar.style.display="flex";
})
menu.addEventListener("click",function(){
    navbar.style.display="none";
})




