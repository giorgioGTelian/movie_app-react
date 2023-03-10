import React, { useEffect, useState } from "react";


const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Content = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setMovies(respData.results);
  }

  function handleSearchTermChange(e) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
    } else {
      getMovies(APIURL);
    }
  }

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div id="content">
      {movies.map((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        return (
          <div key={movie.id} className="movie">
            <img src={IMGPATH + poster_path} alt={title} />
            <div className="movie-info">
              <h3>{title}</h3>
              <span className={getClassByRate(vote_average)}>
                {vote_average}
              </span>
            </div>
            <div className="overview">
              <h3>Overview:</h3>
              {overview}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
