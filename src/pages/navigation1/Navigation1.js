import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { routes } from "constants/exampleRoutes";
import Routes from "components/Routes";
import Navigation1ListItem from "./Navigation1ListItem";
import Navigation1SubList from "./Navigation1SubList";

export default function Navigation1() {
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
      <nav id="nav" className={`navigation1 ${sticky ? " sticky" : ""}`} ref={ref}>
        <ul className="navigation1-list">
          {routes.map(({ path, name, children = [] }, key) => {
            if (children.length > 0) {
              return <Navigation1SubList name={name} children={children} key={key} />
            } else {
              return <Navigation1ListItem path={path} name={name} key={key} />
            }
          })}
        </ul>
      </nav>
      <Routes matchUrl={match.url} routes={routes} />
    </div>
  );
}