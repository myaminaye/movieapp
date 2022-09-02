import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [overview, setOverview] = useState('');
  const [rating, setRating] = useState('99%');
  const [isPending, setIsPending] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { name, overview, rating };

    setIsPending(true);

    fetch('http://localhost:8000/movies/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    }).then(() => {
      console.log('new movie added');
      setIsPending(false);
      history('/');
    })
  }

  return (
    <div className="create">
      <h2>Search a movie or series name</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isPending && <button>Search Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;