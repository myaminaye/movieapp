const SearchMovie = ({movies}) => {

  const resultmovie = movies;
  console.log(resultmovie);
  
  const handleSearch = () =>{

  }
    return ( 
        <div className="search-movie">
          <input type='text' />
          <button type="submit" onClick={handleSearch}>Search</button>
          <button type="reset">Clear</button>
        </div>
     );
}
 
export default SearchMovie;