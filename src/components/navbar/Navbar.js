import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "constants/routes";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  const location = useLocation(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
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

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav id="nav" className={`app-nav ${sticky ? " sticky" : ""}`} ref={ref}>
      <div className="app-nav-toggler" onClick={handleToggle}>
        {isCollapsed ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
      </div>
      <ul className={`app-nav-list ${isCollapsed ? " app-nav-collapsed" : ""}`}>
        {routes.map(({ path, name }, key) =>
          <li className={`app-nav-item ${`/${location.pathname.split("/")[1]}` === path ? " current-app-nav" : ""}`} key={key}>
            <Link to={path}>
              <p>{name}</p>
            </Link>
          </li>)}
      </ul>
    </nav>
  )
}