import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

export default function Navigation1ListItem({ path, name }) {
  const location = useLocation(null);
  const match = useRouteMatch();

  return (
    <li>
      <Link
        to={`${match.url}${path}`}
        className={`${`/${location.pathname.split("/").pop()}` === path
          ? "navigation1-active-item"
          : ""}`}
      >
        <p>{name}</p>
      </Link>
    </li>
  );
}