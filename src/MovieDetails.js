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

  let [rating, setRating] = useState('');
  // console.log(rating);
  const history = useNavigate();

  const handleRating = (e) => {
    movie.rating = rating;
    console.log(rating);
    setRating('');
  };

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.name}</h2>
          <p>{movie.genre}</p>
          <p className="rating">Rating: {movie.rating} %</p>
          <img src={movie.photo}></img>
          <br />
          <div>{movie.overview}</div>

          {/* <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="50">50%</option>
            <option value="90">90%</option>
          </select> */}

          <input type='number' min='0' max='100' step ='5' value={rating} onChange={(e) => setRating(e.target.value)} />
          <button type="submit" onClick={(e)=> {
            e.preventDefault();
            handleRating(rating);
          }}>Rate the movie again</button>

          {/* <button onClick={handleRate}>Rate Again</button> */}
        </article>
      )}
    </div>
  );
};

export default MovieDetails;