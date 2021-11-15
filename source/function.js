function darkAndLight(){
	document.body.classList.toggle("dark-mode");
}

function darkAndLight(){
	document.body.classList.toggle("dark-mode");
}

window.onscroll = function() {navSticky()};

var navbar = document.getElementById("stickNav");
var sticky = navbar.offsetTop;

function navSticky() {
  if (window.pageYOffset >= sticky) {
  	navbar.style.position = 'sticky';
  	navbar.style.top = '0';
  } else {
  	navbar.style.position = 'relative';
  }
}