var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay:true,
  draggable: true,
  prevNextButtons: false,
  wrapAround: true
});


// hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "50px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



// toggle navbar

function showNavbar(){
    var NavToggle=document.getElementById("nav_toggle");
    NavToggle.style.left="0px";
}

function hideNavbar(){
    var NavToggle=document.getElementById("nav_toggle");
    NavToggle.style.left="-220px";
}