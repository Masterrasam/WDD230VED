/* ===== Spotlights =====*/
const URLrequest =  "https://masterrasam.github.io/wdd_230_dev1/json/data.json";
const containers = document.querySelector(".spotlight-container");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["directory"];
    companies.forEach(fillSpotlight);
});

function fillSpotlight(company) {
    let card = document.querySelector(".busSec");
    let logo = document.querySelector(".busLogo");
    let companyName = document.querySelector(".busName");
    let phoneNumber = document.querySelector(".busPhone");
    let website = document.querySelector(".busWebsite");
    let membershipLevel = document.querySelector(".busMembership");
    

    logo.setAttribute('src', "images/" + company.logo);
    logo.setAttribute('alt', `${company.companyName}`);

    companyName.innerHTML = `${company.companyName}`;
    phoneNumber.innerHTML = company.phoneNumber;
    website.innerHTML = `${company.website}`;
    membershipLevel.innerHTML = company.membershipLevel;

    containers.appendChild(card);
}