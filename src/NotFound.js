import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Popcorn Picks</title>
      </Helmet>
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
        <p className="not-found-message">It looks like the page you're trying to reach doesn't exist or has been moved.</p>
        <Link to="/" className="not-found-link">
          Back to the Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
