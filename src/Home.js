import MovieList from "./MovieList";
import useFetch from "./useFetch";
import SearchMovie from './SearchMovie';

const Home = () => {
  const { error, isPending, data: movies } = useFetch('http://localhost:8000/movies');

  return (
    <div className="home">
      <SearchMovie/>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movies && <MovieList movies={movies} /> }
    </div>
  );
}
 
export default Home;