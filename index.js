let nav = document.querySelector('.navbar');


  
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
    
  } else {
    nav.style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}


let navMenu = document.querySelector('#navbarsExampleDefault');
let btnNav = document.querySelector('#btn')
navMenu.style.display ="none";
btnNav.addEventListener('click', function(){
if(navMenu.style.display === "none"){
  navMenu.style.display ="block";
}else{
  navMenu.style.display ="none";
}
  
    // navMenu.setAttribute('id', 'ul');


})

