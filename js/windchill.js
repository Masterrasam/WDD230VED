const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "//api.openweathermap.org/data/2.5/weather?q=HollyHill&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);//

    const windspeed = document.querySelector("#windspeed");

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    windspeed.innerHTML = `${data.wind.speed}`;

    const windchill = document.querySelector("#windchill");
    if ((currentTemp <= 50) && (windspeed > 3)) {
    const chill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * currentTemp * Math.pow(windspeed, .16));
    windchill.innerHTML = chill.toFixed(1);
    } else {
    windchill.innerHTML = "N/A";
    }

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;

});
   