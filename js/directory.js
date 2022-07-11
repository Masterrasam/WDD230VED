const requestURL = "https://masterrasam.github.io/wdd_230_dev1/json/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const directory = jsonObject['directory'];
    const groups = document.querySelector('.groups');

    directory.forEach(company => {
        // Create elements to add to the document
        let picture = document.createElement('img');
        let group = document.createElement('div');
        let companyName = document.createElement('h3');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('p');
        let membershipLevel = document.createElement('p');
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        picture.setAttribute('src', "images/" + company.logo);
        picture.setAttribute('alt', `${company.companyName}`);
        picture.setAttribute('loading', 'lazy');
       
        // Change the textContent property of the h2 element to contain the prophet's full name
        companyName.innerHTML = `${company.companyName}`;
        address.innerHTML = `${company.address}`;
        phoneNumber.innerHTML = `${company.phoneNumber}`;
        website.innerHTML = `${company.website}`;
        membershipLevel.innerHTML = `${company.membershipLevel}`;
      
        // Add/append the section(card) with the h2 element
        group.appendChild(picture);
        group.appendChild(companyName);
        group.appendChild(address);
        group.appendChild(phoneNumber);
        group.appendChild(website);
        group.appendChild(membershipLevel);
    
        // Add/append the existing HTML div with the cards class with the section(card)
        groups.append(group);
    });
});

/* --------- buttons ---------- */

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".groups");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}