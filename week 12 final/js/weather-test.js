const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#con-desc");
const humidityPrcnt = document.querySelector("#humidity");

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";

apiFetch(url);

async function apiFetch(apiURL) {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data); // this is for testing the call
    displayResults(data);
  } else {
    throw Error(await response.text());
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.current.temp.toFixed(0)} &#176;F`;
  humidityPrcnt.innerHTML = `${data.current.humidity}%`;

  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  const desc = data.current.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
/*-----top code is working---*/

  // Check for alerts
  //handleAlerts();


  // Weather Forecast
  const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=4351383&units=imperial&APPID=cbdbf1656275e48900a3931f13929b10"

  fetch(apiURL_forecast)
  .then(response => response.json())
  .then((jsObject) => {
      
      var weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";

      const data = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));
      console.log(data);

      const dayOfWeek = document.getElementsByClassName("forecast-day");
      const weatherIcon = document.getElementsByClassName("weatherIcon");
      const tempMax = document.getElementsByClassName("forecast-max");
      const tempMin = document.getElementsByClassName("forecast-min");

      for (var i = 0; i < data.length; i++) {
          var d = new Date(data[i].dt_txt);
          dayOfWeek[i].textContent = weekday[d.getDay()];

          const imagesrc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
          const description = data[i].weather[0].description;
          weatherIcon[i].setAttribute('src', imagesrc);
          weatherIcon[i].setAttribute('alt', description);

          tempMax[i].innerHTML = Math.round(data[i].main.temp_max) + " &#176;F";
          tempMin[i].innerHTML = Math.round(data[i].main.temp_min) + " &#176;F";
      }

  });