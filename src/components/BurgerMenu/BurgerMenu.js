import React, { useState } from "react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [status, setStatus] = useState("close");

  const modalWindow = () => {
    if (status === "open") {
      return (
          <div className="modal_window_content">
            <ul>
              <li>People</li>
              <li>Planet</li>
              <li>Films</li>
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
