import React from "react";

import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header d-flex">
      <Link to="/"><h1>Star Wars Wiki</h1></Link>
      <ul className="main_nav d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planet">Planet</Link>
        </li>
        <li>
          <Link to="/ships">Ships</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
