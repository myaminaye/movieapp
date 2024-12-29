import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { tmdbAPIkey } from "./Config";
import { Helmet } from "react-helmet";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState("10");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleRateMovie = () => {
    setDialogOpen(true);
  };

  const API_KEY = tmdbAPIkey;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details.");
        }
        const data = await response.json();
        setMovie(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchMovieDetails();
  }, [url]);

  return (
    <div className="movie-details">
      <Helmet>
        <title>Popcorn Picks</title>
      </Helmet>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genres && movie.genres.length > 0 ? movie.genres.map((genre) => genre.name).join(", ") : "No genres available"}</p>
          <p className="rating">TMDB Rating: {movie.vote_average * 10}%</p>
          <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={movie.title} />
          <br />
          <div>{movie.overview}</div>
          <input type="number" min="0" max="10" step="1" value={rating} onChange={(e) => setRating(e.target.value)} />
          <button type="button" onClick={handleRateMovie}>
            Rate the movie
          </button>

          {/* Dialog for rating */}
          <Dialog open={dialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Movie Rating</DialogTitle>
            <DialogContent>
              <p>You rated the movie: {rating}/10</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
