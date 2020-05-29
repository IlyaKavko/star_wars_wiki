import React from "react";
import "./DetailsInfo.css"
import UserIMG from "./UserImg/user1.png"


const DetailsInfo = () => {
  return (
    <div className="DetailsInfo">
      <h3>Person Name</h3>
      <div className="info_block d-flex">
        <img src={UserIMG} alt="User" />
        <ul className="detail_info_block">
            <li>
                <span>mass</span>
                <span>200</span>
            </li>
            <li>
                <span>homewoeld</span>
                <span>Venera</span>
            </li>
            <li>
                <span>gender</span>
                <span>male</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsInfo;
