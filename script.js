const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movieGrid = document.getElementById('movie-grid');

searchBtn.addEventListener('click', searchMovies);

function searchMovies() {
	const searchTerm = searchInput.value.trim();
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
		});
}

// Call MixDrop API to get latest uploaded movies
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
	});
