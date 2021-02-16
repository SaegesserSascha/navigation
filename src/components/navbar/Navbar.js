import React from "react";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";

export default function Navbar() {
  return (
    <nav>
      <ul className="app-nav-list">
        {routes.map(({ path, name }, key) =>
          <li className="app-nav-item" key={key}>
            <Link to={path}>{name}</Link>
          </li>)}
      </ul>
    </nav>
  )
}