import React,{ useState } from "react";

const SearchMovie = ({handleSearch, resetMovies}) => {

  const [search, setSearch] = useState('');
    return ( 
        <div className="search-movie">
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" onClick={(e)=> {
            e.preventDefault();
            handleSearch(search)
          }}>Search</button>
          <button type="reset" onClick={(e)=>{
            resetMovies();
          }}>Clear</button>
        </div>
     );
}
 
export default SearchMovie;