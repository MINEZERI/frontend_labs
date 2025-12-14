'use strict';

const table = document.getElementById("hobbies");
const h4 = document.querySelector(".books-title");

const getRandomHexColor = function () {
	return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6)
}

table.addEventListener("click", (e) => {
	e.currentTarget.style.color = getRandomHexColor();
	e.currentTarget.style.backgroundColor = getRandomHexColor();
})

h4.addEventListener("click", (e) => {
	e.currentTarget.style.color = getRandomHexColor();
	e.currentTarget.style.backgroundColor = getRandomHexColor();
})