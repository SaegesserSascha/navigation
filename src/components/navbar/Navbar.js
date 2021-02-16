import React from "react";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";

export default function Navbar() {
  return (
    <nav>
      <ul className="app-nav-list">
        {routes.map(({ path, name }) =>
          <li className="app-nav-item">
            <Link to={path}>{name}</Link>
          </li>)}
      </ul>
    </nav>
  )
}