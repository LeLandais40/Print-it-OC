let data = [
	{image: 'assets/images/slideshow/slide1.jpg', text: 'Impressions tous formats <span>en boutique et en ligne</span>'},
	{image: 'assets/images/slideshow/slide2.jpg', text: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'},
	{image: 'assets/images/slideshow/slide3.jpg', text: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'},
	{image: 'assets/images/slideshow/slide4.png', text: 'Autocollants <span>avec découpe laser sur mesure</span>'},
];

let index = 1;

function updateSlider() {
	let imgElement = document.getElementById('slide');
	let textElement = document.querySelector('#banner p');

	imgElement.src = data[index].image;
	textElement.innerHTML = data[index].text;

	const bulletspoint = document.querySelector(".dots");
	bulletspoint.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		const bullet = document.createElement("p");
		bullet.classList.add("dot");
		if (i == index) {
			bullet.classList.add("dot_selected");
		}
		bulletspoint.appendChild(bullet);
	}
}

function ChangeSlide(n) {
    index += n;
	if (index === data.length) index = 0;
	if (index < 0) index = data.length - 1;
	updateSlider();
}

updateSlider();
