const theranos = {
	firstName: "Elizabeth",
	lastName: "Holmes",
	age: 41,
	education: [
		"St. John University", "Stanford University"
	],
	img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};

const elonMusk = {
	firstName: "Elon",
	lastName: "Reeve",
	age: 48,
	education: [
		" Queens College", "Stanford University", "Wharton School of the University of Pennsylvania"
	],
	img: "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
    wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
};

const yourHero= {
	firstName: "Marie",
	lastName: "Skłodowska",
	age: 66,
	education: [
		" University of Paris"
	],
	img: "https://physicsnotebook.com/wp-content/uploads/2024/11/Slider-Pic-1.jpg",
    wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
	occupation: "Physicist and Chemist",
	awards: "Fist woman to win a Nobel Prize(two times), and the first and only person to recive two Nobel Prizes in different scientific fields ",
	hometown: "Warsaw, Poland",
	field: "Radioctivity"
};

const profiles = [theranos, elonMusk, yourHero];

const staffContainer = document.querySelector("#staff-container");

const currentYear = new Date().getFullYear();

profiles.forEach(profile => {
	const birthYear = currentYear - profile.age;

	let educationHTML = "";
	profile.education.forEach((school, index) =>{
		educationHTML += `<p class="small">${index + 1}. ${school}</p>`;
	});

	let extraHTML = "";
	if (profile.occupation) {
		extraHTML += `<p class="small"><strong>Occupation:</strong> ${profile.occupation}</p>`;
    extraHTML += `<p class="small"><strong>Awards:</strong> ${profile.awards}</p>`;
    extraHTML += `<p class="small"><strong>Hometown:</strong> ${profile.hometown}</p>`;
    extraHTML += `<p class="small"><strong>Field:</strong> ${profile.field}</p>`;

	}

	const profileHTML = `
	<article class="col-12 col-sm-6 col-md-4 col-lg-3">
	<div class="card h-100 shadow-sm text-center">
	<img src="${profile.img}" class="card-img-top" alt="${profile.firstName}">
        <div class="card-body">
          <h5 class="card-title">${profile.lastName}, ${profile.firstName}</h5>
          <p class="card-text text-muted">Year Born: ${birthYear}</p>
          <p class="fw-bold">Education</p>
          ${extraHTML}
        </div>
        <div class="card-footer bg-white">
          <a href="${profile.wiki}" target="_blank" class="btn btn-outline-primary btn-sm">
            View Profile
          </a>
        </div>
      </div>
    </article>
	`;

	staffContainer.insertAdjacentHTML("beforeend", profileHTML);
	
});
