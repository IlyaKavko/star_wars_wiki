import React from "react";

import "./Header.scss";
import { Link } from "react-router-dom";

import Logo from "./logo.png";

const Header = () => {
  return (
    <div className="Header d-flex ">
      <div className="logo">
        <Link to="/"><img src={ Logo } alt="Logo" /> </Link>
      </div>
      <div className="main_nav">
        <ul className="d-flex">
          <li className="h btn btn-outline-warning">
            <Link to="/people">People</Link>
          </li>
          <li className="btn btn-outline-warning">
            <Link to="/planet">Planet</Link>
          </li>
          <li className="btn btn-outline-warning">
            <Link to="/ships">Ships</Link>
          </li>
        </ul>
      </div>
      <div className="angle-row">
        <div className="inner" />
      </div>
    </div>
  );
};

export default Header;
