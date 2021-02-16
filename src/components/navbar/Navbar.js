import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ navItems }) {
  return (
    <nav>
      <ul className="app-nav-list">
        {navItems.map(navItem =>
          <li className="app-nav-item">
            <Link to={navItem.route}>{navItem.name}</Link>
          </li>)}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string)
};