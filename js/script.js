/* Get Current Date for Header */
const currentDateSpan = document.querySelector("#currentDate");
const now = new Date();

currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

/* hamburger toggle menu */
function toggleMenu() {
    document.querySelector("#mainNav").classList.toggle("open");
    document.querySelector("#menuButton").classList.toggle("open");
}
const x = document.querySelector("#menuButton");
x.onclick = toggleMenu;


/* last modified for Footer*/
let nd = new Date();

document.getElementById("currentYear").textContent = nd.getFullYear();
document.querySelector("#modDate").textContent = document.lastModified;

/* Banner on Mondays & Tuesdays */
if(now.getDay() === 2) {
    document.getElementById("banner").style.display = "block";
}
const close = document.querySelector("#close");
close.addEventListener("click", () => {
    banner.style.display = "none";
});
