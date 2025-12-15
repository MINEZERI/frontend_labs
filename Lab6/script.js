const btn = document.getElementById('download-btn');
const resultsContainer = document.getElementById('results-container');
const successMessage = document.getElementById('success-message');

btn.addEventListener('click', () => {
	fetch('https://randomuser.me/api/?results=5')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response not ok');
			}
			return response.json();
		})
		.then((data) => {
			resultsContainer.innerHTML = '';
			
			successMessage.classList.remove('hidden');
			
			const users = data.results;
			
			users.forEach(user => {
				const card = document.createElement('div');
				card.className = 'user-card';
				
				card.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <div class="user-info">
                        <p><span>Cell:</span> ${user.cell}</p>
                        <p><span>Country:</span> ${user.location.country}</p>
                        <p><span>Postcode:</span> ${user.location.postcode}</p>
                        <p><span>Email:</span> <br>${user.email}</p>
                    </div>
                `;
				
				resultsContainer.appendChild(card);
			});
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
			alert('Не вдалося отримати дані');
		});
});