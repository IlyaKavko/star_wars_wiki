import React from "react";
import "./ErrorComponent.css";
import ErrorIMG from "./error.jpg";

const ErrorComponetn = () => {
  return (
    <div className="ErrorComponent">
      <img src={ErrorIMG} alt="Error" />
      <p>Something went wrong</p>
      <p>Dont worry! Be happy!!</p>
    </div>
  );
};

export default ErrorComponetn;
