import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  
  const {
    data: movie,
    error,
    isPending,
  } = useFetch("http://localhost:8000/movies/" + id);

  let [rating, setRating] = useState('80');
  const history = useNavigate();

  const handleRate = (e) => {
    e.preventDefault();
    setRating(e.target.value);
    console.log(rating);
  };

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.name}</h2>
          <p>{movie.genre}</p>
          <p className="rating">Rating: {movie.rating}</p>
          <img src={movie.photo}></img>
          <br />
          <div>{movie.overview}</div>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="50">50%</option>
            <option value="90">90%</option>
          </select>
          <button onClick={handleRate}>Rate Again</button>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
