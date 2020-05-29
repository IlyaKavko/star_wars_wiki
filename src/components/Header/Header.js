import React from "react";

import "./Header.css"

const Header = () => {
  return (
    <div className="Header d-flex">
      <h1>Star Wars Wiki</h1>
      <ul className="main_nav d-flex">
        <li>
          <a href="/#">People</a>
        </li>
        <li>
          <a href="/#">Planet</a>
        </li>
        <li>
          <a href="/#">Ships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
