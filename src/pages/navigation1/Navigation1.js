import "./style.css";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { routes } from "constants/exampleRoutes";
import Routes from "components/Routes";

export default function Navigation1() {
  const location = useLocation(null);
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);
  const match = useRouteMatch();

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="navigation1-container">
      <nav id="nav" className={`navigation1-nav ${sticky ? " sticky" : ""}`} ref={ref}>
        <ul className="navigation1-nav-list">
          {routes.map(({ path, name }, key) =>
            <li className={`navigation1-nav-item ${`/${location.pathname.split("/").pop()}` === path ? " current-navigation1-nav" : ""}`} key={key}>
              <Link to={`${match.url}${path}`}>
                <p>{name}</p>
              </Link>
            </li>)}
        </ul>
      </nav>
      <Routes matchUrl={match.url} routes={routes} />
    </div>
  );
}