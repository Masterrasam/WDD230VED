const requestURL = "https://masterrasam.github.io/WDD230VED/week12final/json/templeinfo.json";
const containers = document.querySelector(".temple-cards");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const information = jsonObject["temples"];
    information.forEach(templeData);
});

function templeData(temple) {
    let card = document.querySelector(".tempCard");
    let imageSmall = document.querySelector(".tempPic");
    let name = document.querySelector(".tempName");
    let streetAddress = document.querySelector(".tempAddress");
    let cityState = document.querySelector(".tempCity");
    let phone = document.querySelector(".tempPhone");
    let email = document.querySelector(".tempWeb");
    let services = document.querySelector(".tempServ");
    let history = document.querySelector(".tempHist");
    let ordinanceSch = document.querySelector(".tempOrd");
    let sessionSch = document.querySelector(".tempSess");
    let closureSch = document.querySelector(".tempClose");
    

    imageSmall.setAttribute('src', "images/" + temple.imageSmall);
    imageSmall.setAttribute('alt', `${temple.name}`);

    name.innerHTML = `${temple.name}`;
    streetAddress.innerHTML = temple.streetAddress;
    cityState.innerHTML = `${temple.cityState}`;
    phone.innerHTML = temple.phone;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = temple.services;
    history.innerHTML = `${temple.history}`;
    ordinanceSch.innerHTML = temple.ordinanceSch;
    sessionSch.innerHTML = `${temple.sessionSch}`;
    closureSch.innerHTML = temple.closureSch;

    containers.appendChild(card);
}