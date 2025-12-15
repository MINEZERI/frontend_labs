const form = document.getElementById("userForm");

const regexPatterns = {
	fullname: /^[A-Za-zА-Яа-яІіЇїЄє']+\s[A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/,
	group: /^[A-ZА-ЯІЇЄ]{2}-\d{2}$/,
	phone: /^\d{3}-\d{3}-\d{2}-\d{2}$/,
	address: /^[A-Za-zА-Яа-яІіЇїЄє\s-]+$/,
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let isValid = true;
	let outputData = "Введені дані:\n";
	
	document.querySelectorAll("input").forEach(inp => inp.classList.remove("error"));
	
	for (const [id, pattern] of Object.entries(regexPatterns)) {
		const input = document.getElementById(id);
		const value = input.value.trim();
		
		if (pattern.test(value)) {
			outputData += `${id}: ${value}\n`;
		} else {
			input.classList.add("error");
			isValid = false;
		}
	}
	
	if (isValid) {
		alert(outputData);
	} else {
		alert("Знайдено помилки у виділених полях!");
	}
});

const table = document.getElementById("gridTable");
const colorPicker = document.getElementById("colorPicker");
const VARIANT_NUMBER = 10;

const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

let counter = 1;
for (let i = 0; i < 6; i++) {
	const row = document.createElement("tr");
	for (let j = 0; j < 6; j++) {
		const cell = document.createElement("td");
		cell.textContent = counter.toString();
		
		if (counter === VARIANT_NUMBER) {
			cell.addEventListener("mouseenter", () => {
				cell.style.backgroundColor = getRandomColor();
			});
			
			cell.addEventListener("click", () => {
				cell.style.backgroundColor = colorPicker.value;
			});
			
			cell.addEventListener("dblclick", () => {
				const allCells = table.querySelectorAll("td");
				const otherColor = getRandomColor();
				
				allCells.forEach(td => {
					if (Number(td.textContent) === VARIANT_NUMBER) return
					
					td.style.backgroundColor = otherColor;
				});
			});
		}
		
		row.appendChild(cell);
		counter++;
	}
	table.appendChild(row);
}