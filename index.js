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

window.scrollTo( 0, 1000 );

// этот код меняет поведение прокрутки на "smooth"
window.scrollTo({
    top: 1000,
    behavior: "smooth"
});



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

