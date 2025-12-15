'use strict';

const table = document.getElementById("hobbies");
const h4 = document.querySelector(".books-title");
const img = document.querySelector("img")
const buttons = document.querySelector(".button-container")

const getRandomHexColor = function () {
	return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6)
}

table.addEventListener("click", (e) => {
	e.currentTarget.style.color = getRandomHexColor();
	e.currentTarget.style.backgroundColor = getRandomHexColor();
});

h4.addEventListener("click", (e) => {
	e.currentTarget.style.color = getRandomHexColor();
	e.currentTarget.style.backgroundColor = getRandomHexColor();
});

const operation = new Map([
	['add', (el) => {
		el.style.display = "block";
	}],
	['enlarge', (el) => {
		if (Number(el.height) < 6) el.height = "6"
		if (Number(el.width) < 12) el.width = "12"
		el.height = String(Number(el.height) * 1.25);
		el.width = String(Number(el.width) * 1.25);
	}],
	['reduce', (el) => {
		el.height = String(Number(el.height) / 1.25);
		el.width = String(Number(el.width) / 1.25);
	}],
	['remove', (el) => {
		el.style.display = "none";
	}]
])

buttons.addEventListener("click", (e) => {
	const op = e.target.className;
	console.log(op)
	const action = operation.get(op);
	action(img);
});