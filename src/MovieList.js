import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                <h2>{movie.name}</h2>
                <p>Genre {movie.genre}</p>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default MovieList;
