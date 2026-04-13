import { BackIcon, MovieIcon } from "./Icons";
import { Link } from "react-router-dom";

function Logo({ Page }) {
  return Page === "recommendation" ? (
    <Link to="/" className="link">
      <div className="logo">
        <BackIcon size={24} />

        <h1>Recommendation</h1>
      </div>
    </Link>
  ) : (
    <Link to="/" className="link">
      <div className="logo">
        <MovieIcon size={24} />
        <h1>Movies List</h1>
      </div>
    </Link>
  );
}

export default Logo;
