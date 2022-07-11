const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);//

    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;
  });