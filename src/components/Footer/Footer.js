import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <ul>
          <Link to="/">
            <li>Home |</li>
          </Link>
          <Link to="/people/">
            <li>People |</li>
          </Link>
          <Link to="/planet/">
            <li>Planet |</li>
          </Link>
          <Link to="/films/">
            <li>Films</li>
          </Link>
        </ul>
        <div className="copyrast">
          <p>&copy; Created by Ilya Kavko</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
