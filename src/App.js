
import "./style.css";
import Content from "./pages/content.js";
import MovieForm from "./pages/movieform.js";
import React, { useState, useEffect } from "react";
import Loader from "/core/loader.js";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1");
      const data = await response.json();
      setMovies(data);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieForm />
      {isLoading ? (
        <Loader />
      ) : (
        <Content movies={movies} />
      )}
    </div>
  );
}
