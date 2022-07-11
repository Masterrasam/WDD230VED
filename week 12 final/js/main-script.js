
//* SLIDES
//* Function for operating slideshow on front page

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var requestURL = 'https://masterrasam.github.io/WDD230VED/week12final/json/templedata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    templeFeatured(templeData);
}

//* FEATURED TEMPLE

function templeFeatured(jsonObj) {
    var temples = jsonObj['temples']
    var i = 0;
    var featured = temples[i].featured;

    for (i = 0; i < temples.length; i++) {
        var featured = temples[i].featured;
        if (featured == "Yes") {
            var image = "<source srcset='" + temples[i].imageSrcSmall + "' media='(max-width: 600px)'> <img src='" + temples[i].imageSrc + "' class='featured' alt='" + temples[i].imageAlt + "'>";
            document.getElementById("featuredImage").innerHTML = image;
        var title = temples[i].name;
        document.getElementById("featuredTitle").innerHTML = title;
        var description = temples[i].description;
        document.getElementById("featuredDescription").innerHTML = description;
        }
    }
}

/* last modified for Footer*/
let nd = new Date();

document.getElementById("currentYear").textContent = nd.getFullYear();
document.querySelector("#modDate").textContent = document.lastModified;