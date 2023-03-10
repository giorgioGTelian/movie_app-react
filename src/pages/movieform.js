import React, { useState } from 'react';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [voteAverage, setVoteAverage] = useState(0);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleVoteAverageChange = (event) => {
    setVoteAverage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="SearchALL">
        <input type="text" id="search" placeholder="Search all movies" className="search" />
      </section>
      <button className="btn" id="fullscr">Go Fullscreen</button>
      <input type="text" id="titleSearch" placeholder="Search by title" className="search" value={title} onChange={handleTitleChange} />
      <button type="button" id="filterTitleBtn" onClick={filterByTitle}>Filter by title</button>

      <div>
        <label htmlFor="genreSelect">Filter by Genre:</label>
        <select id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
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
        <input type="number" id="voteInput" min="0" max="10" step="0.1" value={voteAverage} onChange={handleVoteAverageChange} />
        <button type="submit">Go</button>
      </div>
    </form>
  );
}

export default MovieForm;
