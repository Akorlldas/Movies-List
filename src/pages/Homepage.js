import { Link } from "react-router-dom";
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Homepage() {
  useDocumentTitle("Home");
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  return (
    <>
      <div className="homepage">
        <div className="welcome">
          <h1>Welcome!</h1>

          <hr />
          <br />
          <p>
            欢迎使用Movies
            List！这是一个电影搜索与观影记录平台。您可以自由地搜索电影、查看电影详情，并为电影打分，通过收集电影记录自己对电影的感受！
          </p>
          <p>
            Welcome to Movies List! We are a private movie search and viewing
            record platform. Here, you can freely search for movies, view
            detailed information, rate films, and record your personal
            impressions and thoughts about them!
          </p>
          <br />
          <hr />
          <h3>Start collecting your favorite movies!</h3>
          <h3>快来收集你喜欢的电影吧！</h3>
        </div>

        <div className="entrance">
          <div className="hp-logo-wrapper">
            {!isLogoLoaded && (
              <div className="hp-logo-skeleton" aria-hidden="true" />
            )}
            <img
              src="/logo192.png"
              alt="logo"
              className={`hp-logo ${isLogoLoaded ? "is-loaded" : "is-loading"}`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setIsLogoLoaded(true)}
              onError={() => setIsLogoLoaded(true)}
            />
          </div>
          <Link to="mainpage" className="hp-link">
            Movies List
          </Link>
          <Link to="/recommendation" className="hp-link">
            Recommendations
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>Created by @akorlldas</p>
      </footer>
    </>
  );
}

export default Homepage;
