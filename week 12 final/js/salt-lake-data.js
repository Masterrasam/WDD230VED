var requestURL = 'https://masterrasam.github.io/WDD230VED/week12final/json/templedata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var templeData = request.response;
  templeSaltLake(templeData);
}

//* Function to write temple data onto page; loop through JSON to find town name, then write header and events in townEventsPreston article.

function templeSaltLake(jsonObj) {
  var temples = jsonObj['temples']
  var i = 0;
  var name = temples[i].name;

  for (i = 0; i < temples.length; i++) {
    var name = temples[i].name;
    if (name == "Salt Lake") {
           var image = "<source srcset='" + temples[i].imageSrcSmall + "' media='(max-width: 600px)'> <img src='" + temples[i].imageSrc + "' class='featured' alt='" + temples[i].imageAlt + "'>";
            document.getElementById("templeImage").innerHTML = image;
      var phone = temples[i].phoneNumber;
      document.getElementById("phone").innerHTML = phone;
      var address = temples[i].streetAddress + ", " + temples[i].cityState + " " + temples[i].zip;
      document.getElementById("address").innerHTML = address;
      var description = temples[i].description;
      document.getElementById("description").innerHTML = description;
      document.getElementById("services").innerHTML = "<li>" + temples[i].services[0] + "</li> <li>" + temples[i].services[1] + "</li> <li>" + temples[i].services[2] + "</li>";
      document.getElementById("ordinances").innerHTML = "<li>" + temples[i].ordinanceSchedule[0] + "</li> <li>" + temples[i].ordinanceSchedule[1] + "</li> <li>" + temples[i].ordinanceSchedule[2] + "</li> <li>" + temples[i].ordinanceSchedule[3] + "</li>";

      for (x = 0; x < temples[i].closures.length; x++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(temples[i].closures[x]);
        node.appendChild(textnode);
        document.getElementById("closures").appendChild(node);
      }
    }
  }
}

//* Request Current Weather data from OpenWeatherMap

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  //* Store data in variables

  var currentCondition = weatherData.weather[0].main;
  var highTemp = weatherData.main.temp_max;
  var humidity = weatherData.main.humidity;
  var mainTemp = weatherData.main.temp;
  var windSpeed = weatherData.wind.speed;
  var imageConditions = "https://openweathermap.org/img/w/";

  //* Write data into page using element IDs and variables

  document.getElementById('current-weather').innerHTML = currentCondition;
  document.getElementById('temp-high').innerHTML = highTemp;
  document.getElementById('humid').innerHTML = humidity;
  document.getElementById('windTemp').innerHTML = mainTemp;
  document.getElementById('windSpeed').innerHTML = windSpeed;
  document.getElementById('windChill').innerHTML = getWindChill();

  document.getElementById("conditions-icon").setAttribute("src", imageConditions + weatherData.weather[0].icon + ".png");
  document.getElementById("conditions-icon").setAttribute("alt", weatherData.weather[0].description);
}

//* Calculate wind chill

function getWindChill() {
  var tempF = parseInt(document.getElementById('windTemp').innerHTML);
  var speed = parseInt(document.getElementById('windSpeed').innerHTML);
  result = windChill(tempF, speed);
  return result;
}

function windChill(tempF, speed) {
  var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
  var soCold = windChillFactor.toFixed(2);

  return soCold;
}