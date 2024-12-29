import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Popcorn Picks</h1>
      <div className="links">{location.pathname !== "/" && <Link to="/">Home</Link>}</div>
    </nav>
  );
};

export default Navbar;
