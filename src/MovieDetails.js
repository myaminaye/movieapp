import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);

  const history = useNavigate();

  const handleRate = () => {
    fetch('http://localhost:8000/movies/' + movie.id, {
      method: 'ADD'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div className="movie-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <article>
          <h2>{ movie.name }</h2>
          <p>{ movie.genre }</p>
          <p className="rating">Rating: {movie.rating}</p>
          <img src={movie.photo}></img><br/>
          <div>{ movie.overview }</div>
          <button onClick={handleRate}>Rate Again</button>
        </article>
      )}
    </div>
  );
}
 
export default MovieDetails;