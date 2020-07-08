import React, { useState } from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [status, setStatus] = useState("close");

  const modalWindow = () => {
    if (status === "open") {
      return (
        <div className="modal_window_content">
          <ul>
            <Link to="/people/">
              <li>People</li>
            </Link>
            <Link to="/planet/">
              <li>Planet</li>
            </Link>
            <Link to="/films/">
              <li>Films</li>
            </Link>
          </ul>
        </div>
      );
    }
  };

  const modal = modalWindow();
  return (
    <div className="BurgerMenu">
      <div
        className="BurgerMenuContent"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <i className={status} />
        <i className={status} />
        <i className={status} />
      </div>
      <div className="modal_window">{modal}</div>
    </div>
  );
};

export default BurgerMenu;
