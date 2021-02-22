import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Navigation1ListItem from "./Navigation1ListItem";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export default function Navigation1SubList({ name, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isCollapsedRef = useRef(isCollapsed)
  const history = useHistory();

  const toggleIsCollapsed = useCallback(() =>
    setIsCollapsed(!isCollapsedRef.current),
    [isCollapsedRef, setIsCollapsed]
  );

  useEffect(() => {
    isCollapsedRef.current = isCollapsed;
  }, [isCollapsed])

  
  useEffect(() => {
    return history.listen(() => {
      setIsCollapsed(true);
    });
  }, [history]);

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