import Logo from "./Logo";
import { Link } from "react-router-dom";
import { BackIcon } from "./Icons";

function NavBar({ Page, children }) {
  if (Page === "recommendation") {
    return (
      <>
        <nav className="nav-bar-recommendation">
          <Link to="/" className="nav-back-btn" aria-label="Back to homepage">
            <BackIcon size={22} />
          </Link>
          <h1 className="nav-title">Recommendation</h1>
        </nav>

        <nav className="nav-bar">
          <Logo Page={Page} />
          {children}
        </nav>
      </>
    );
  }

  if (Page === "mainpage") {
    return (
      <>
        <nav className="nav-bar-recommendation">
          <Logo Page={Page} />
          {children}
        </nav>

        <nav className="nav-bar">
          <Logo Page={Page} />
          {children}
        </nav>
      </>
    );
  }

  return (
    <nav className="nav-bar">
      <Logo Page={Page} />
      {children}
    </nav>
  );
}

export default NavBar;
