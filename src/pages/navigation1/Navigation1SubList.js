import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Navigation1ListItem from "./Navigation1ListItem";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export default function Navigation1SubList({ name, children }) {
  const match = useRouteMatch();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const isCollapsedRef = useRef(isCollapsed)

  const toggleIsCollapsed = useCallback(() =>
    setIsCollapsed(!isCollapsedRef.current),
    [isCollapsedRef, setIsCollapsed]
  );

  useEffect(() => {
    isCollapsedRef.current = isCollapsed;
  }, [isCollapsed])

  return (
    <li onClick={toggleIsCollapsed}>
      <a>
        <div className="navigation1-collapsable-container">
          <p>{name}</p>
          {isCollapsed ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
        </div>
      </a>
      <ul className={`navigation1-sublist ${isCollapsed ? " collapsed" : ""}`}>
        {children.map(({ path, name }, key) => {
          return <Navigation1ListItem path={path} name={name} key={key} />
        })}
      </ul>
    </li>
  );
}