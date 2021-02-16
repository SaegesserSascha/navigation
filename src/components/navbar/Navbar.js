import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "constants/routes";

export default function Navbar() {
  const location = useLocation(null);
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);

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
    <nav id="nav" className={`app-nav ${sticky ? " sticky" : ""}`} ref={ref}>
      <ul className="app-nav-list">
        {routes.map(({ path, name }, key) =>

          <li className={`app-nav-item ${location.pathname === path ? " current-nav" : ""}`} key={key}>
            <Link to={path}>
              {name}
            </Link>
          </li>)}
      </ul>
    </nav>
  )
}