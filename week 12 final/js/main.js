/*Hamburger Menu*/
function hamburgerMenu(){
	document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}

/* last modified for Footer*/
let nd = new Date();

document.getElementById("currentYear").textContent = nd.getFullYear();
document.querySelector("#modDate").textContent = document.lastModified;
