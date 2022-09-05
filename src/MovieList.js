import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id} >
          {/* style={{backgroundImage: `url(${movie.photo})`,backgroundSize: 'cover'}} */}
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.photo}></img><br/>
                <h2>{movie.name}</h2>
                <p>Rating {movie.rating}</p>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default MovieList;
