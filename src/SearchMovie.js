import React, { useState } from "react";

const SearchMovie = ({ handleSearch, resetMovies }) => {
  const [search, setSearch] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (search.trim()) {
      handleSearch(search); // Trigger search with the current keyword
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && search.trim()) {
      e.preventDefault();
      handleSearch(search); // Trigger search on pressing Enter
    }
  };

  const handleClear = () => {
    setSearch(""); // Clear the input field
    resetMovies(); // Reset to the home page with the original movie list
  };

  return (
    <div className="search-movie">
      <input type="text" value={search} placeholder="Search for a movie..." onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
      <button type="submit" onClick={handleSearchClick}>
        Search
      </button>
      <button type="reset" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchMovie;
