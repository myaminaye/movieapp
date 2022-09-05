import Navbar from './NavBar';
import Home from './Home';
import Create from './Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            {/* <Route path="/search" element={<Search />} />  */}
            <Route path="/movies/:id" element={<MovieDetails/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;