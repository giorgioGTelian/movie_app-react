import React from "react";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieForm = () => {
  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData.results);
  };

  const showMovies = (movies) => {
    const main = document.getElementById("content");
    main.innerHTML = "";

    movies.forEach((movie) => {
      const { poster_path, title, vote_average, overview } = movie;

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

      main.appendChild(movieEl);
    });
  };

  const filterByTitle = () => {
    const searchTerm = document.getElementById("titleSearch").value;
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
    }
  };

  const filterByVote = () => {
    const voteInput = document.getElementById("voteInput").value;

    if (voteInput) {
      const voteURL = `${APIURL}&vote_average.gte=${voteInput}`;
      getMovies(voteURL);
    } else {
      getMovies(APIURL);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      search.value = "";
    }
  };

  const handleGenreSelect = () => {
    const selectedGenre = genreSelect.value;

    if (selectedGenre) {
      const genreURL = APIURL + "&with_genres=" + selectedGenre;
      getMovies(genreURL);
    } else {
      getMovies(APIURL);
    }
  };

  return (<header>
      <h1 className="heroic-text">Trending Movies</h1>
      <form id="form">
        <section className="SearchALL">
          <input
            type="text"
            id="search"
            placeholder="Search all movies"
            className="search"
          />
        </section>
        <input
          type="text"
          id="titleSearch"
          placeholder="Search by title"
          className="search"
        />
        <button type="button" id="filterTitleBtn" onClick={filterByTitle}>
          Filter by title
        </button>

        <div>
          <label htmlFor="genreSelect">Filter by Genre:</label>
          <select id="genreSelect">
            <option value="all">All Genres</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </div>

        <div>
          <label htmlFor="voteInput">Filter by Vote Average:</label>
          <input type="number" id="voteInput" min="0" max="10" step="0.1" />
          <button type="button" onClick={filterByVote}>
            Go
          </button>
        </div>
      </form>
    </header>
  );
}

export default MovieForm;
