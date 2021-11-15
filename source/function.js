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

function openToNav() {
    documnet.body.classList.toggle("openNav");
}

const nowDate = new Date();

document.getElementById("writeSecond").innerHTML = nowDate.getSeconds();
document.getElementById("writeMinute").innerHTML = nowDate.getMinutes();
document.getElementById("writeHours").innerHTML = nowDate.getHours();
document.getElementById("writeMonth").innerHTML = nowDate.getMonth();
document.getElementById("writeDay").innerHTML = nowDate.getDay();
document.getElementById("writeYear").innerHTML = nowDate.getFullYear();