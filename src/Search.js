import { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import MOVIEDB from '../data/db.json';

const Search = () => {
  const searchedObjects = [];
  const [name, setName] = useState('');
  const [isPending, setIsPending] = useState(false);

  const history = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const movie = { name};

  //   setIsPending(true);

  //   fetch('http://localhost:8000/movies/', {
  //     method: '',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(movie)
  //   }).then(() => {
  //     console.log('new movie added');
  //     setIsPending(false);
  //     history('/');
  //   })
  // }

  return (
    <div className="search">
      <h2>Search a movie or series name</h2>
      {/* <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
      {MOVIEDB.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return <div>{val.first_name} </div>
      })} */}
    </div>
  );
}
 
export default Search;