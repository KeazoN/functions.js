function darkAndLight(){
	document.body.classList.toggle("dark-mode"); 
	/*
	We add the class "dark-mode" to our body tag. 
	We implement both if and else structure with Toogle.
	*/
}

window.onscroll = function() {navSticky()};
/*We call create function when scroll is active on our page.*/
let navbar = document.getElementById("stickNav");
let sticky = navbar.offsetTop;
/*We define our variables.*/
function navSticky() { //We create a function.
  if (window.pageYOffset >= sticky) {
  	navbar.style.position = 'sticky';
  	navbar.style.top = '0';
  } else {
  	navbar.style.position = 'relative';
  }
}
/*
	If this function is used and the scroll comes under the sticky, 
	we say make the position style of my navbar variable sticky and give top 0. 
	If not, keep it relative.
*/

const nowDate = new Date();
//We assigned the date to a variable.

document.getElementById("writeSecond").innerHTML = nowDate.getSeconds();
document.getElementById("writeMinute").innerHTML = nowDate.getMinutes();
document.getElementById("writeHours").innerHTML = nowDate.getHours();
document.getElementById("writeMonth").innerHTML = nowDate.getMonth();
document.getElementById("writeDay").innerHTML = nowDate.getDay();
document.getElementById("writeYear").innerHTML = nowDate.getFullYear();
/*
	If one of these variables sends a request to me, it prints get.
*/
