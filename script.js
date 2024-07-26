const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movieGrid = document.getElementById('movie-grid');

searchBtn.addEventListener('click', searchMovies);

function searchMovies() {
	const searchTerm = searchInput.value.trim();
	if (searchTerm) {
		fetch(`(link unavailable))
			.then(response => response.json())
			.then(data => {
				const movies = data.data;
				movieGrid.innerHTML = '';
				movies.forEach(movie => {
					const movieDiv = document.createElement('div');
					movieDiv.innerHTML = `
						<img src="${movie.thumbnail_url}" alt="${movie.name}">
						<h3>${movie.name}</h3>
					`;
					movieGrid.appendChild(movieDiv);
				});
			})
			.catch(error => console.error(error));
	}
}

fetch(`(link unavailable))
	.then(response => response.json())
	.then(data => {
		const movies = data.data;
		movies.forEach(movie => {
			const movieDiv = document.createElement('div');
			movieDiv.innerHTML = `
				<img src="${movie.thumbnail_url}" alt="${movie.name}">
				<h3>${movie.name}</h3>
			`;
			movieGrid.appendChild(movieDiv);
		});
	})
	.catch(error => console.error(error));
