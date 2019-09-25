let nav = document.querySelector('.navbar');


  
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}