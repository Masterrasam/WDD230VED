const visits = document.querySelector(".visits");
const days = document.querySelector(".days");

let count = Number(window.localStorage.getItem("counter"));
let seconds = Number(window.localStorage.getItem("timer"));

if (count !== 0) {
	visits.textContent = count;
} else {
	visits.textContent = `First visit!`;
}

count++;
localStorage.setItem("counter", count);

if (seconds !== 0) {
    dayCount = Math.round((Date.now() - seconds) / 86400000); 
	days.textContent = dayCount;
} else {
	days.textContent = `First Time!`;
}

seconds = Date.now();
localStorage.setItem("timer", seconds);
