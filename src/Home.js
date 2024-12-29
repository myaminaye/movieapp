import React, { useState } from "react";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import { tmdbAPIkey } from "./Config";
import useFetch from "./useFetch";
import { Grid2 } from "@mui/material";
import { Helmet } from "react-helmet";

const Home = () => {
  const API_KEY = tmdbAPIkey;

  // States for handling movies
  const [page, setPage] = useState(1); // Current page for original movie list
  const [searchPage, setSearchPage] = useState(1); // Current page for search results
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);

  // URL based on the state (normal or search)
  const url = isSearchMode ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKeyword}&page=${searchPage}` : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  const { data, isPending, error } = useFetch(url);

  const movies = data ? data.results : [];

  // Handle Search
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setSearchPage(1); // Reset to the first page of search results
    setIsSearchMode(true);
  };

  // Reset to original movie list
  const resetMovies = () => {
    setSearchKeyword("");
    setSearchPage(1);
    setPage(1);
    setIsSearchMode(false);
  };

  // Pagination handlers
  const handlePrevPage = () => {
    if (isSearchMode && searchPage > 1) setSearchPage(searchPage - 1);
    else if (!isSearchMode && page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (isSearchMode) setSearchPage(searchPage + 1);
    else setPage(page + 1);
  };

  return (
    <div className="home">
      <Helmet>
        <title>Popcorn Picks</title>
      </Helmet>
      <Grid2>
        <SearchMovie handleSearch={handleSearch} resetMovies={resetMovies} />
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {movies && <MovieList movies={movies} />}
        <div className="pagination">
          {((isSearchMode && searchPage > 1) || (!isSearchMode && page > 1)) && <button onClick={handlePrevPage}>Prev</button>}
          {movies.length > 0 && data?.total_pages > (isSearchMode ? searchPage : page) && <button onClick={handleNextPage}>Next</button>}
        </div>
      </Grid2>
    </div>
  );
};

export default Home;
