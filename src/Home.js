import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import useFetch from "./useFetch";
import SearchMovie from "./SearchMovie";

const Home = () => {
  const {
    error,
    isPending,
    data: movies,
  } = useFetch("http://localhost:8000/movies");

  const [isSearched, setSearched] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearch = (search) => {
    let newMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(search)
    );
    setSearchedMovies(newMovies);
    setSearched(true);
  };

  const resetMovies = (e) => {
    setSearchedMovies([]);
    setSearched(!isSearched);
  };

  // console.log(movies, searchedMovies);

  return (
    <div className="home">
      <SearchMovie handleSearch={handleSearch} resetMovies={resetMovies} />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies && <MovieList movies={isSearched ? searchedMovies : movies} />}
    </div>
  );
};

export default Home;
