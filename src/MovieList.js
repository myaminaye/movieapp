import { Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  console.log("moview", movies);
  const image_base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <Grid2 container spacing={2}>
      {movies.map((movie) => (
        <Grid2 item xs={12} sm={3} md={3} lg={2} key={movie.id}>
          <div className="movie-preview">
            <Link to={`/movies/${movie.id}`} className="movie-link">
              <img src={movie.poster_path ? `${image_base_url}${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={movie.title || "Movie Poster"} style={{ width: "100%", height: "auto" }} />
              <h2>{movie.title}</h2>
              <p>Rating {movie.vote_average}/10</p>
            </Link>
          </div>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MovieList;
